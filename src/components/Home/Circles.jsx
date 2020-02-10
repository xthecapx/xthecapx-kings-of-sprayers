import React from 'react';

const Circles = props => {
  return (
    <svg
      width={1440}
      height={550}
      viewBox="0 0 1440 550"
      fill="none"
      {...props}
    >
      <mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={-2}
        y={0}
        width={1461}
        height={550}
      >
        <path fill="url(#prefix__paint0_linear)" d="M-2 0h1461v673H-2z" />
      </mask>
      <g mask="url(#prefix__a)" fill="#77D9A1">
        <circle cx={1284} cy={336} r={534} fillOpacity={0.05} />
        <circle cx={1286} cy={334} r={450} fillOpacity={0.1} />
        <circle cx={1317} cy={334} r={359} fillOpacity={0.15} />
      </g>
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={1411}
          y1={25}
          x2={26}
          y2={550}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#12441E" />
          <stop offset={1} stopColor="#111360" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Circles;
