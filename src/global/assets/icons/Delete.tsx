'use client'

interface DeleteProps {
    width?: number
    height?: number
    action?: () => void
}

export const Delete = ({ width, height, action }: DeleteProps) => {
    return (
        <svg
            data-testid="filter-id"
            width={width ? width : 18}
            height={height ? height : 18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={action}
        >
            <path
                d="M1.28571 16C1.28571 17.1 2.44286 18 3.85714 18H14.1429C15.5571 18 16.7143 17.1 16.7143 16V4H1.28571V16ZM18 1H13.5L12.2143 0H5.78571L4.5 1H0V3H18V1Z"
                fill="#009EDD"
            />
        </svg>
    )
}
