import styled from 'styled-components'

export const ContainerChildren = styled.div`
    margin: 20px;
`
export const ContainerInput = styled.div`
    margin: 0 20px;

    p {
        color: ${(props) => props.theme.colors.error};;
        margin: 5px 0 0 5px;
    }
`
