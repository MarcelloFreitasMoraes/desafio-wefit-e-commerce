import styled from 'styled-components'

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
