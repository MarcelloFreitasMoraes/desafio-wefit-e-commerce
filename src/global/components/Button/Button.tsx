import React from 'react'
import * as S from './Button.styled'
import { ButtonProps } from './types'

const Button: React.FC<ButtonProps> = ({
    onClick,
    label,
    width,
    disabled,
    loading,
}) => {
    return (
        <S.Button onClick={onClick} width={width} disabled={disabled}>
            {loading && <S.CircularProgress />}
            {label}
        </S.Button>
    )
}

export default Button
