import styled from 'styled-components'

export const Conteiners = styled.div`
    width: 100%;
    height: auto;
    border-radius: 4px;
    padding: 16px;
    background-color: ${(props) => props.theme.colors.white};

    svg {
        position: relative;
        z-index: 9999;
    }
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    margin: 0 0 20px 0;
    text-align: center;
`

export const Box = styled.div`
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const BoxInput = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 20px 0 0 50px;
`

export const Input = styled.input`
    width: 62px;
    height: 26px;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    background-color: ${(props) => props.theme.colors.white};
    text-align: center;
`
export const Values = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
`

export const Text = styled.div`
    width: 100px;
`

export const ContentSub = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`
export const ContentQtd = styled.div`
    margin-top: 25px;

    p:first-of-type {
        color: ${(props) => props.theme.colors.description};
    }

    @media screen and (max-width: 400px) {
        margin-left: -70px;
        width: 100px;
    }
`

export const Border = styled.div`
    width: 100%;
    margin: 1.5rem 0;
    border-bottom: 1px solid ${(props) => props.theme.colors.description};
`

export const BoxTotal = styled.div`
    display: flex;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    margin-bottom: 20px;

    p:first-of-type {
        color: ${(props) => props.theme.colors.description};
    }

    p:nth-of-type(2) {
        font-size: 24px;
    }
`
