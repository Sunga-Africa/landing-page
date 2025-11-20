import { FC, useEffect, useState } from 'react';
import { ArrowRight, ArrowLeft } from '@phosphor-icons/react';

type Direction = 'vertical' | 'horizontal';

interface ScrollButtonProps {
  direction?: Direction;
  element: HTMLDivElement | null;
  distance?: number;
  leftIcon?: React.ElementType;
  rightIcon?: React.ElementType;
}

const ScrollButton: FC<ScrollButtonProps> = ({
  direction = 'horizontal',
  element,
  distance = 250,
  leftIcon: LeftIcon = ArrowLeft,
  rightIcon: RightIcon = ArrowRight
}) => {
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // Helper to check scroll position
  const checkScrollPosition = () => {
    if (!element) return;
    if (direction === 'horizontal') {
      setAtStart(element.scrollLeft <= 0);
      setAtEnd(
        element.scrollLeft + element.clientWidth >= element.scrollWidth - 1
      );
    } else {
      setAtStart(element.scrollTop <= 0);
      setAtEnd(
        element.scrollTop + element.clientHeight >= element.scrollHeight - 1
      );
    }
  };

  useEffect(() => {
    if (!element) return;
    checkScrollPosition();
    element.addEventListener('scroll', checkScrollPosition);
    // Clean up
    return () => {
      element.removeEventListener('scroll', checkScrollPosition);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [element, direction]);

  const scrollDiv = (distance: number, direction: Direction) => {
    if (!element) {
      return;
    }

    const currentPosition =
      direction === 'horizontal' ? element.scrollLeft : element.scrollTop;
    const scrollTo = currentPosition + distance;

    element.scrollTo({
      [direction === 'horizontal' ? 'left' : 'top']: scrollTo,
      behavior: 'smooth'
    });
  };

  return (
    <div
      className={`flex ${
        direction === 'horizontal' ? 'flex-row' : 'flex-col'
      } gap-2.5 w-fit`}
    >
      <button
        onClick={() => scrollDiv(-distance, direction)}
        className={`justify-center cursor-pointer items-center font-semibold p-1 rounded-full transition-colors duration-200
          ${
            atStart
              ? 'border-gray-400 border text-gray-400 cursor-not-allowed'
              : 'bg-[#000000] text-white hover:bg-black'
          }`}
        disabled={atStart}
      >
        <LeftIcon />
      </button>
      <button
        onClick={() => scrollDiv(distance, direction)}
        className={`justify-center cursor-pointer items-center font-semibold p-1 rounded-full transition-colors duration-200
          ${
            atEnd
              ? 'border-gray-400 border text-gray-400 cursor-not-allowed'
              : 'bg-[#000000] text-white hover:bg-black'
          }`}
        disabled={atEnd}
      >
        <RightIcon />
      </button>
    </div>
  );
};

export default ScrollButton;
