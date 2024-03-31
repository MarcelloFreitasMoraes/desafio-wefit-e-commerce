import { Car } from '@/global/assets/icons/Car'
import React from 'react'
import * as S from './Header.styled'
import TypographicComponent from '../Typographic/Typographic'
import { HeaderProps } from './types'
import { useRouter } from 'next/router'

const Header: React.FC<HeaderProps> = ({ amount }) => {
    const router = useRouter()
    return (
        <S.Wrapper>
            <span onClick={() => router.push(`/`)}>
                <TypographicComponent large title="WeMovies" weight="bold" />
            </span>
            <S.Content onClick={() => router.push(`/checkout`)}>
                <S.ContentText>
                    <TypographicComponent
                        medium
                        title={`Meu Carrinho`}
                        weight="semi-bold"
                    />
                    <TypographicComponent
                        small
                        title={`${amount} items`}
                        weight="semi-bold"
                    />
                </S.ContentText>
                <S.BoxIcon>
                    <Car />
                </S.BoxIcon>
            </S.Content>
        </S.Wrapper>
    )
}

export default Header
