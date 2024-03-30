import React from 'react'
import * as S from './Button.styled'
import { ButtonProps } from './types'

const Button: React.FC<ButtonProps> = ({ onClick, label, width }) => {
    return (
        <S.Button onClick={onClick} width={width}>
            {label}
        </S.Button>
    )
}

export default Button
