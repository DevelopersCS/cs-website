import { useState } from 'react';
import { twMerge } from 'tailwind-merge';


type HamburgerButtonType = {
  isOpen: boolean,
  onClick: () => void
  className: string

}

const HamburgerButton = ({ onClick, className, isOpen }:HamburgerButtonType) => {

  return (
    <button
      aria-label="hamburger-button"
      onClick={onClick}
      className={twMerge("space-y-2 flex flex-col justify-center items-center", className)}
    >
      <div
        className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-3.5' : ''}`}
      />
      <div
        className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}
      />
      <div
        className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
      />
    </button>
  );
};

export default HamburgerButton;
