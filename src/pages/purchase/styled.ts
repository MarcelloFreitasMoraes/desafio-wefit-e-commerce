import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 596px;
    border-radius: 4px;
    padding: 64px;
    gap: 24px;
    background-color: ${(props) => props.theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    > p {
        color: ${(props) => props.theme.colors.secundary};
    }

    img {
        width: 294px;
        height: 307px;
        @media screen and (max-width: 768px) {
            width: 238px;
            height: 247px;
        }
    }
`
