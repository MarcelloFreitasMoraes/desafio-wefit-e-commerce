import styled from 'styled-components'

interface ButtonProps {
    backgroundcolor?: string
    disabled: boolean
}

export const Container = styled.div`
    width: 338.67px;
    height: 324px;
    border-radius: 4px;
    padding: 16px;
    gap: 16px;
    background-color: ${(props) => props.theme.colors.white};
`
export const Box = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`
export const Info = styled.div`
    text-align: center;
    line-height: 21.79px;
    margin: 5px 0;
`
export const ContentButton = styled.div`
    display: flex;
    align-items: center;

    span {
        padding: 0 5px;
    }
`
export const Button = styled.button<ButtonProps>`
    background-color: ${(props) =>  props.backgroundcolor};
    color: ${(props) => props.theme.colors.white};
    width: 306.67px;
    height: 40px;
    padding: 8px;
    gap: 12px;
    border-radius: 4px;
    border: none;
    cursor: ${(props) => (props.disabled ? 'inherit' : 'pointer')};
`
