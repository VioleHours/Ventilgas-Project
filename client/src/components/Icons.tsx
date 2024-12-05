import React from "react";

type IconProps = {
    fillC?: string;
    width?: string;
    height?: string;
};

export const ArrowIcon: React.FC<IconProps> = ({ fillC, height, width }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 12 12"
            fill={fillC}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0.724572 10.791C0.529309 10.9862 0.529309 11.3028 0.724572 11.4981C0.919834 11.6933 1.23642 11.6933 1.43168 11.4981L0.724572 10.791ZM11.6439 1.07871C11.6439 0.802568 11.4201 0.57871 11.1439 0.57871L6.64395 0.57871C6.3678 0.57871 6.14395 0.802568 6.14395 1.07871C6.14395 1.35485 6.3678 1.57871 6.64395 1.57871L10.6439 1.57871L10.6439 5.57871C10.6439 5.85485 10.8678 6.07871 11.1439 6.07871C11.4201 6.07871 11.6439 5.85485 11.6439 5.57871L11.6439 1.07871ZM1.43168 11.4981L11.4975 1.43226L10.7904 0.725157L0.724572 10.791L1.43168 11.4981Z"
                fill={fillC}
            />
        </svg>
    );
};

export const ArrowDown: React.FC<IconProps> = ({ fillC }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 8 21"
            fill={fillC}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4.5 1C4.5 0.723858 4.27614 0.5 4 0.5C3.72386 0.5 3.5 0.723858 3.5 1L4.5 1ZM3.64645 20.3536C3.84171 20.5488 4.15829 20.5488 4.35355 20.3536L7.53553 17.1716C7.7308 16.9763 7.7308 16.6597 7.53553 16.4645C7.34027 16.2692 7.02369 16.2692 6.82843 16.4645L4 19.2929L1.17157 16.4645C0.97631 16.2692 0.659728 16.2692 0.464465 16.4645C0.269203 16.6597 0.269203 16.9763 0.464465 17.1716L3.64645 20.3536ZM3.5 1L3.5 20L4.5 20L4.5 1L3.5 1Z"
                fill={fillC}
            />
        </svg>
    );
};

export const Logo: React.FC<IconProps> = ({ width, height }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 59 67"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M19.4021 22.4689L25.8846 27.2719C19.7565 32.4956 16.4425 40.2976 16.9379 48.3347L17.0236 49.7244C12.2517 42.3097 12.3804 32.7592 17.3503 25.4758L19.4021 22.4689Z"
                fill="#5C80FF"
            />
            <path
                d="M25.8577 27.2552L19.3751 22.4522C25.5033 17.2285 28.8173 9.4265 28.3219 1.38938L28.2362 -0.000270661C33.0081 7.4144 32.8794 16.9649 27.9095 24.2483L25.8577 27.2552Z"
                fill="#5C80FF"
            />
            <path
                d="M26.3649 31.7935L32.2163 36.2322C26.2467 41.6269 22.9054 49.342 23.0545 57.3867L23.0756 58.5232C18.8867 51.4068 19.1534 42.5181 23.7612 35.6656L26.3649 31.7935Z"
                fill="#5C80FF"
            />
            <path
                d="M32.1937 36.2162L26.3423 31.7776C32.3119 26.3829 35.6532 18.6677 35.5041 10.6231L35.483 9.48657C39.6719 16.6029 39.4052 25.4916 34.7974 32.3441L32.1937 36.2162Z"
                fill="#5C80FF"
            />
            <path
                d="M33.5074 39.6241L39.3589 44.0627C33.3893 49.4574 30.0479 57.1726 30.1971 65.2173L30.2181 66.3538C26.0293 59.2374 26.2959 50.3487 30.9037 43.4962L33.5074 39.6241Z"
                fill="#5C80FF"
            />
            <path
                d="M39.3344 44.0473L33.4829 39.6086C39.4525 34.2139 42.7939 26.4988 42.6447 18.4541L42.6237 17.3176C46.8125 24.434 46.5459 33.3227 41.9381 40.1752L39.3344 44.0473Z"
                fill="#5C80FF"
            />
        </svg>
    );
};