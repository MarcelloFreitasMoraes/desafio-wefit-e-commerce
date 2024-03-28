interface meCarProps {
    width?: number
    height?: number
}

export const MeCar = ({ width, height }: meCarProps) => {
    return (
        <svg
            data-testid="filter-id"
            width={width ? width : 13}
            height={height ? height : 13}
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6.60026 4.99989H7.73359V3.29989H9.4336V2.16655H7.73359V0.466553H6.60026V2.16655H4.90026V3.29989H6.60026V4.99989ZM4.33359 10.0999C3.71026 10.0999 3.20593 10.6099 3.20593 11.2332C3.20593 11.8566 3.71026 12.3666 4.33359 12.3666C4.95693 12.3666 5.46693 11.8566 5.46693 11.2332C5.46693 10.6099 4.95693 10.0999 4.33359 10.0999ZM10.0003 10.0999C9.37693 10.0999 8.8726 10.6099 8.8726 11.2332C8.8726 11.8566 9.37693 12.3666 10.0003 12.3666C10.6236 12.3666 11.1336 11.8566 11.1336 11.2332C11.1336 10.6099 10.6236 10.0999 10.0003 10.0999ZM4.42993 8.25822L4.44693 8.19022L4.95693 7.26655H9.1786C9.6036 7.26655 9.9776 7.03422 10.1703 6.68289L12.3576 2.71055L11.3716 2.16655H11.3659L10.7426 3.29989L9.1786 6.13322H5.20059L5.12693 5.98022L3.85759 3.29989L3.31926 2.16655L2.78659 1.03322H0.933594V2.16655H2.06693L4.10693 6.46755L3.34193 7.85589C3.25126 8.01455 3.20026 8.20155 3.20026 8.39989C3.20026 9.02322 3.71026 9.53322 4.33359 9.53322H11.1336V8.39989H4.57159C4.49793 8.39989 4.42993 8.33755 4.42993 8.25822Z"
                fill="white"
            />
        </svg>
    )
}
