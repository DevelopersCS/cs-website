import { useState } from 'react';
import { twMerge } from 'tailwind-merge';


type HamburgerButtonType = {
  isOpen: boolean,
  onClick: () => void
  className: string

}

const HamburgerButton = ({onClick, className}:HamburgerButtonType) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((state)=> !state);
    onClick();
  };

  return (
    <button
      aria-label="hamburger-button"
      onClick={handleClick}
      className={twMerge("space-y-2 flex flex-col justify-center items-center", className)}
    >
      <div
        className={`w-6 h-0.5 bg-black dark:bg-white transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-3.5' : ''}`}
      />
      <div
        className={`w-6 h-0.5 bg-black dark:bg-white transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}
      />
      <div
        className={`w-6 h-0.5 bg-black dark:bg-white transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
      />
    </button>
  );
};

export default HamburgerButton;
