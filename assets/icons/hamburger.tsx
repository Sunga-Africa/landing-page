type HamburgerIconProps = {
  className?: string;
};

const HamburgerIcon = ({ className }: HamburgerIconProps) => {
    return (
      <svg
        className={className}
        width="24"
        height="24"
        viewBox="0 0 22 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0.5"
          y1="1"
          x2="21.5"
          y2="1"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1="0.5"
          y1="7"
          x2="21.5"
          y2="7"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1="0.5"
          y1="13"
          x2="21.5"
          y2="13"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    );
};

export default HamburgerIcon;
