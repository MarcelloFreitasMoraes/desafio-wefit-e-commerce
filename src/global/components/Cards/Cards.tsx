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
    data,
    action,
}) => {
    return (
        <S.Container>
            <S.Box>
                <Image src={data?.image || image} alt={data?.title || title} width={147} height={188} />
                <S.Info>
                    <TypographicComponent
                        description
                        primary
                        title={data?.title || title}
                        weight="bold"
                    />
                    <TypographicComponent
                        regular
                        primary
                        title={`R$ ${data?.price?.toLocaleString('pt-BR', {
                            minimumFractionDigits: 2,
                        }) || price?.toLocaleString('pt-BR', {
                            minimumFractionDigits: 2,
                        })}`}
                        weight="bold"
                    />
                </S.Info>
            </S.Box>
            <S.ContentButton>
                <S.Button onClick={action}>
                    <MeCar />
                    <span>{data?.amount || amount}</span> ADICIONAR AO CARRINHO
                </S.Button>
            </S.ContentButton>
        </S.Container>
    )
}

export default Cards
