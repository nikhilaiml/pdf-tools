import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
    width: 32,
    height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 24,
                    background: 'transparent',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                >
                    <defs>
                        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#4f46e5" /> {/* Indigo-600 */}
                            <stop offset="100%" stopColor="#9333ea" /> {/* Purple-600 */}
                        </linearGradient>
                    </defs>

                    {/* Main Document Shape */}
                    <path
                        d="M20 10 H60 L80 30 V90 A10 10 0 0 1 70 100 H30 A10 10 0 0 1 20 90 Z"
                        fill="url(#logo-gradient)"
                    />

                    {/* Folded Corner */}
                    <path d="M60 10 V30 H80" fill="#a78bfa" />

                    {/* Gear Element */}
                    <circle cx="65" cy="75" r="18" fill="white" stroke="url(#logo-gradient)" strokeWidth="6" />
                    <path
                        d="M65 57 V63 M65 87 V93 M47 75 H53 M77 75 H83 M52 62 L56 66 M74 84 L78 88 M52 88 L56 84 M74 66 L78 62"
                        stroke="url(#logo-gradient)"
                        strokeWidth="4"
                        strokeLinecap="round"
                    />
                </svg>
            </div>
        ),
        {
            ...size,
        }
    );
}
