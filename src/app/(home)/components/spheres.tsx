'use client';

import Image from 'next/image';

import { FadeIn } from '@/shared/ui/components/fade-in';

export const MainSphere = () => (
  <FadeIn>
    <Image
      className="relative z-10 h-[80%] w-full object-cover"
      src="/images/sphere.svg"
      alt="sphere"
      width={1440}
      height={800}
    />
  </FadeIn>
);

export const GreySphere = () => (
  <FadeIn
    variant="right"
    className="absolute top-[74%] right-[-10px] z-10 h-[107px] w-[97px] -translate-y-1/2"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="88"
      height="252"
      viewBox="0 0 88 252"
      fill="none"
    >
      <foreignObject x="0" y="0" width="0" height="0">
        <div
          style={{
            backdropFilter: 'blur(0px)',
            clipPath: 'url(#bgblur_0_5_786_clip_path)',
            height: '100%',
            width: '100%',
          }}
        ></div>
      </foreignObject>
      <g data-figma-bg-blur-radius="0">
        <path
          d="M125.378 0.5C194.346 0.500264 250.255 56.4102 250.255 125.378C250.255 194.345 194.345 250.255 125.378 250.255C56.4102 250.255 0.500264 194.346 0.5 125.378C0.5 56.41 56.41 0.5 125.378 0.5Z"
          fill="url(#paint0_radial_5_786)"
        />
        <path
          d="M125.378 0.5C194.346 0.500264 250.255 56.4102 250.255 125.378C250.255 194.345 194.345 250.255 125.378 250.255C56.4102 250.255 0.500264 194.346 0.5 125.378C0.5 56.41 56.41 0.5 125.378 0.5Z"
          stroke="url(#paint1_radial_5_786)"
        />
        <path
          d="M125.378 0.5C194.346 0.500264 250.255 56.4102 250.255 125.378C250.255 194.345 194.345 250.255 125.378 250.255C56.4102 250.255 0.500264 194.346 0.5 125.378C0.5 56.41 56.41 0.5 125.378 0.5Z"
          stroke="url(#paint2_radial_5_786)"
        />
        <path
          d="M125.378 0.5C194.346 0.500264 250.255 56.4102 250.255 125.378C250.255 194.345 194.345 250.255 125.378 250.255C56.4102 250.255 0.500264 194.346 0.5 125.378C0.5 56.41 56.41 0.5 125.378 0.5Z"
          stroke="url(#paint3_radial_5_786)"
        />
      </g>
      <g filter="url(#filter0_f_5_786)">
        <ellipse
          cx="124.573"
          cy="67.5111"
          rx="79.5665"
          ry="51.4369"
          fill="url(#paint4_radial_5_786)"
          fillOpacity="0.2"
        />
      </g>
      <defs>
        <clipPath id="bgblur_0_5_786_clip_path" transform="translate(0 0)">
          <path d="M125.378 0.5C194.346 0.500264 250.255 56.4102 250.255 125.378C250.255 194.345 194.345 250.255 125.378 250.255C56.4102 250.255 0.500264 194.346 0.5 125.378C0.5 56.41 56.41 0.5 125.378 0.5Z" />
        </clipPath>
        <filter
          id="filter0_f_5_786"
          x="32.0523"
          y="3.11968"
          width="185.042"
          height="128.783"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="6.47727"
            result="effect1_foregroundBlur_5_786"
          />
        </filter>
        <radialGradient
          id="paint0_radial_5_786"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(20.9758 1.6467e-06) rotate(48.0195) scale(374.889 272.31)"
        >
          <stop stopColor="white" stopOpacity="0.36" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_5_786"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-133.516 25.6529) rotate(35.1112) scale(289.092 170.776)"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0.06" />
        </radialGradient>
        <radialGradient
          id="paint2_radial_5_786"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(324.167 167.82) rotate(161.34) scale(209.571 141.942)"
        >
          <stop stopColor="#8470FF" />
          <stop offset="1" stopColor="#865CFF" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint3_radial_5_786"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(128.108 -57.3092) rotate(47.2897) scale(140.128 100.699)"
        >
          <stop />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint4_radial_5_786"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(124.573 16.0742) rotate(90) scale(76.2302 117.933)"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  </FadeIn>
);

export const OrangeSphere = () => (
  <FadeIn
    variant="left"
    className="absolute top-[64%] left-[50px] z-10 h-[107px] w-[97px] -translate-x-1/2 -translate-y-1/2"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="221"
      viewBox="0 0 80 221"
      fill="none"
    >
      <g filter="url(#filter0_ii_5_766)">
        <path
          d="M-135.737 134.299C-122.338 193.517 -63.9116 230.76 -5.23733 217.484C53.4369 204.208 90.1399 145.44 76.7411 86.2228C63.3423 27.0053 4.91559 -10.2378 -53.7586 3.03809C-112.433 16.314 -149.136 75.0815 -135.737 134.299Z"
          fill="url(#paint0_linear_5_766)"
        />
      </g>
      <path
        d="M-53.7515 3.0705C-112.408 16.3424 -149.1 75.092 -135.705 134.292C-122.31 193.492 -63.9007 230.724 -5.24463 217.452C53.4115 204.18 90.1034 145.43 76.7088 86.2305C63.314 27.0304 4.9048 -10.2013 -53.7515 3.0705Z"
        stroke="url(#paint1_linear_5_766)"
        strokeWidth="0.0656921"
        strokeLinecap="round"
      />
      <defs>
        <filter
          id="filter0_ii_5_766"
          x="-140.996"
          y="-2.92746"
          width="235.516"
          height="224.096"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="15.02" dy="-3.28" />
          <feGaussianBlur stdDeviation="12.5128" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.625 0 0 0 0 0.0338542 0 0 0 0 0.0338542 0 0 0 0.76 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_5_766"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-2.5" dy="1" />
          <feGaussianBlur stdDeviation="3.75383" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.829417 0 0 0 0 0.629167 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_5_766"
            result="effect2_innerShadow_5_766"
          />
        </filter>
        <linearGradient
          id="paint0_linear_5_766"
          x1="54.8261"
          y1="57.6678"
          x2="-142.852"
          y2="168.61"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC56F" />
          <stop offset="1" stopColor="#6D1400" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_5_766"
          x1="759.865"
          y1="-138.118"
          x2="808.387"
          y2="76.3278"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BDBDBD" />
          <stop offset="1" stopColor="#BDBDBD" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </FadeIn>
);
