import styled from 'styled-components'

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    width: 100%;
    margin: 0 0 20px 0;
`

export const Container = styled.div`
    width: 100%;
    height: auto;
    border-radius: 4px;
    padding: 24px;
    gap: 24px;
    background-color: ${(props) => props.theme.colors.white};
`

export const ContentProduto = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    > p {
        color: ${(props) => props.theme.colors.description};
    }
`

export const Content = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    text-align: center;
    margin-top: 15px;
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
`

export const ContentQtd = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    > p {
        color: ${(props) => props.theme.colors.description};
    }
`
export const ContentSub = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    > p {
        color: ${(props) => props.theme.colors.description};
    }
`
export const BoxInput = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 3.5rem;

    svg {
        cursor: pointer;
    }
`

export const Input = styled.input`
    width: 62px;
    height: 26px;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    background-color: ${(props) => props.theme.colors.white};
    text-align: center;
`

export const IconBox = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 5.3rem;

    svg {
        cursor: pointer;
    }
`

export const Border = styled.div`
    width: 100%;
    margin: 1.5rem 0;
    border-bottom: 1px solid ${(props) => props.theme.colors.description};
`

export const ButtonBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    p:first-of-type {
        color: ${(props) => props.theme.colors.description};
    }
`

export const BoxTotal = styled.div`
    display: flex;
    text-align: center;
    gap: 8px;
`
