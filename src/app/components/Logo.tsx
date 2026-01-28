import React from 'react';

export const Logo = ({ className = "w-10 h-10" }: { className?: string }) => {
    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <defs>
                <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4f46e5" /> {/* Indigo-600 */}
                    <stop offset="100%" stopColor="#9333ea" /> {/* Purple-600 */}
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
            </defs>

            {/* Main Document Shape with folded corner */}
            <path
                d="M20 10 
           H60 
           L80 30 
           V90 
           A10 10 0 0 1 70 100 
           H30 
           A10 10 0 0 1 20 90 
           Z"
                fill="url(#logo-gradient)"
            />

            {/* Folded Corner Detail */}
            <path
                d="M60 10 V30 H80"
                fill="#a78bfa"
                fillOpacity="0.5"
            />

            {/* Gear/Tool Element overlaying bottom right */}
            <circle cx="65" cy="75" r="18" fill="white" stroke="url(#logo-gradient)" strokeWidth="6" />
            <path
                d="M65 57 V63 M65 87 V93 M47 75 H53 M77 75 H83 M52 62 L56 66 M74 84 L78 88 M52 88 L56 84 M74 66 L78 62"
                stroke="url(#logo-gradient)"
                strokeWidth="4"
                strokeLinecap="round"
            />

            {/* Text "PDF" inside */}
            <text
                x="33"
                y="55"
                fontSize="24"
                fill="white"
                fontFamily="sans-serif"
                fontWeight="800"
            >
                PDF
            </text>
        </svg>
    );
};

export default Logo;
