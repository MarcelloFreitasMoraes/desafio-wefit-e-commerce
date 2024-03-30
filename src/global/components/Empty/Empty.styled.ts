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
`
export const ImageBox = styled.div`
    position: relative;
    width: 60%;
    height: 70%;

    img {
        width: 447px;
        height: 265px;

        @media screen and (max-width: 768px) {
            width: 100%;
            height: auto;
        }
    }
`
