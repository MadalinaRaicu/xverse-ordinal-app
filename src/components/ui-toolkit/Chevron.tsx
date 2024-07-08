import React from 'react';

export const Chevron = ({ className }: { className?: string }) => {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <svg
      width='9'
      height='16'
      viewBox='0 0 9 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M1 1L8 8L1 15'
        stroke='white'
        strokeWidth='1.75'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
