import React from 'react';

export const Website = props => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#555" {...props}>
    <circle cx={12} cy={12} r={10} />
    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);

export const Download = props => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#555" {...props}>
    <path d="M8 17l4 4 4-4M12 12v9" />
    <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" />
  </svg>
);

export const File = props => (
  <svg width={16} height={16} viewBox="0 0 24 24" {...props}>
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" fill="none" stroke="#555" />
    <path fill="none" stroke="#555" d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
  </svg>
);

export const Star = props => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#555" {...props}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export const Calendar = props => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#555" {...props}>
    <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

export const Award = props => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#555" {...props}>
    <circle cx={12} cy={8} r={7} />
    <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
  </svg>
);