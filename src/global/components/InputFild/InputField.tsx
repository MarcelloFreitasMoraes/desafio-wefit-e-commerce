import React, { useState } from 'react'
import { InputFieldProps } from './types'
import * as S from './InputField.styled'
import { Search } from '@/global/assets/icons/Search'
import theme from '@/styles/theme/theme'

const InputField: React.FC<InputFieldProps> = ({
    onSearch,
    value,
    onChange,
}) => {
    const [isFocused, setIsFocused] = useState<boolean>(false)

    return (
        <S.InputContainer>
            <S.Input
                type="text"
                value={value}
                placeholder="Buscar filme pelo nome"
                onChange={onChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => {
                    setIsFocused(false)
                    onSearch()
                }}
            />
            <S.SearchIcon onClick={onSearch}>
                <Search color={isFocused ? '' : theme.colors.disabled} />
            </S.SearchIcon>
        </S.InputContainer>
    )
}

export default InputField
