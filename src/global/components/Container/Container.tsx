import React from 'react'
import * as S from './Container.styled'

interface Props {
    children: React.ReactNode
}

const Container: React.FC<Props> = ({ children }) => {
    return <S.Container>{children}</S.Container>
}

export default Container
