import React from 'react'
import Image from 'next/image'
import * as S from './Cards.styled'
import { MeCar } from '@/global/assets/icons/MeCar'
import TypographicComponent from '../Typographic/Typographic'
import { CardProps } from './types'

const Cards: React.FC<CardProps> = ({
    title,
    price,
    amount,
    image,
    action,
}) => {
    return (
        <S.Container>
            <S.Box>
                <Image src={image} alt={title} width={147} height={188} />
                <S.Info>
                    <TypographicComponent
                        description
                        primary
                        title={title}
                        weight="bold"
                    />
                    <TypographicComponent
                        regular
                        primary
                        title={`R$ ${price?.toLocaleString('pt-BR', {
                            minimumFractionDigits: 2,
                        })}`}
                        weight="bold"
                    />
                </S.Info>
            </S.Box>
            <S.ContentButton>
                <S.Button onClick={action}>
                    <MeCar />
                    <span>{amount}</span> ADICIONAR AO CARRINHO
                </S.Button>
            </S.ContentButton>
        </S.Container>
    )
}

export default Cards
