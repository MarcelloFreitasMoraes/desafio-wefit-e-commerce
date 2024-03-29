import React from 'react'
import Image from 'next/image'
import * as S from './Cards.styled'
import { MeCar } from '@/global/assets/icons/MeCar'
import TypographicComponent from '../Typographic/Typographic'
import { CardProps } from './types'

const Cards: React.FC<CardProps> = ({ data, action, amount = 0 }) => {   
    return (
        <S.Container>
            <S.Box>
                <Image
                    src={data?.image}
                    alt={data?.title}
                    width={147}
                    height={188}
                />
                <S.Info>
                    <TypographicComponent
                        description
                        primary
                        title={data?.title}
                        weight="bold"
                    />
                    <TypographicComponent
                        regular
                        primary
                        title={`R$ ${data?.price?.toLocaleString('pt-BR', {
                            minimumFractionDigits: 2,
                        })}`}
                        weight="bold"
                    />
                </S.Info>
            </S.Box>
            <S.ContentButton>
                <S.Button onClick={action} backgoundColor={amount > 0} disabled={amount > 0} >
                    <MeCar />
                    <span>{amount}</span>{`${amount > 0 ? ' VÁ PARA O CARRINHO' : 'ADICIONAR AO CARRINHO    '} `}
                </S.Button>
            </S.ContentButton>
        </S.Container>
    )
}

export default Cards
