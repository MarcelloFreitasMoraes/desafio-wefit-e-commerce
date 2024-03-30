import { AiFillCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import styled from 'styled-components'

interface Props {
    backgroundColor: string
}

export const AlertContainer = styled.div<Props>`
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    max-width: 1040px;
    width: 100%;
    margin: 0 auto;
    background-color: ${(props) => props.backgroundColor};
    border: none;
    border-radius: 8px;
    position: fixed;
    /* z-index: 99; */
    top: 20px;
    right: 0;
    left: 0;

    p {
        padding: 0 10px;
        font-size: 1rem;
        font-weight: 400;
    }

    @media screen and (max-width: 768px) {
        p {
            font-size: 0.75rem;
        }
    }
`
export const CheckItem = styled(AiFillCheckCircle)`
    font-size: 2em;
    color: green;

    @media screen and (max-width: 768px) {
        font-size: 1em;
    }
`
export const CheckItemError = styled(AiOutlineCloseCircle)`
    font-size: 2em;
    color: red;

    @media screen and (max-width: 768px) {
        font-size: 1em;
    }
`
