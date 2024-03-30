import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

interface Props {
    width?: string
}

export const Button = styled.button<Props>`
    width: ${(props) => props.width || '100%'};
    height: 40px;
    border-radius: 4px;
    padding: 8px;
    gap: 12px;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
    border: none;
    cursor: pointer;
`
export const CircularProgress = styled.div`
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    border-top: 2px solid #000;
    width: 24px;
    height: 24px;
    animation: ${rotate} 1s linear infinite;
`
