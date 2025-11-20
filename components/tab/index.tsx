import classNames from 'classnames';
import React, { ReactNode, useState } from 'react';

interface TabItem {
  component: ReactNode;
  buttonTitle: string;
  default: boolean;
}

interface TabsProps {
  tabs: TabItem[];
  className?: string;
  outlet?: ReactNode;
  onTabChange?: (index: number) => void;
}

const Tabs: React.FC<TabsProps> = ({
  className = '',
  tabs = [],
  outlet,
  onTabChange
}) => {
  const [activeIndex, setActiveIndex] = useState(
    tabs.findIndex((item) => item.default) || 0
  );

  const handleTabChange = (index: number) => {
    setActiveIndex(index);
    onTabChange?.(index);
  };

  return (
    <>
      <div className="flex justify-between items-center w-full">
        <div
          className={classNames(
            `container flex lg:justify-center hide-scrollbar overflow-x-auto gap-4 lg:my-24 ${className}`
          )}
        >
          {tabs.map((item, index) => (
            <button
              key={index}
              onClick={() => handleTabChange(index)}
              className={classNames(
                'uppercase text-sm',
                index == activeIndex ? 'tab-active' : 'tab'
              )}
            >
              {item.buttonTitle}
            </button>
          ))}
        </div>
        <div className=" justify-end lg:block hidden">{outlet}</div>
      </div>

      <div>{tabs[activeIndex]?.component}</div>
      <div className="flex justify-center lg:hidden px-4 mt-4 ">{outlet}</div>
    </>
  );
};

export default Tabs;
