import React, { Fragment } from 'react'
import * as S from './CardCheckout.styled'
import Image from 'next/image'
import TypographicComponent from '../Typographic/Typographic'
import { CardCheckoutProps } from './types'
import { More } from '@/global/assets/icons/More'
import { Smaller } from '@/global/assets/icons/Smaller'
import { Delete } from '@/global/assets/icons/delete'

const CardCheckout: React.FC<CardCheckoutProps> = ({
    // image,
    // title,
    price,
    // amount,
    data,
}) => {
    return (
        <S.Container>
            {data && Object.entries(data)?.map((x: any) => {
                    console.log(x, 'xXx');
                    
                    return (
                        <Fragment key={x[1].id}>
            <S.Grid>
                <S.ContentProduto>
                    <TypographicComponent
                        medium
                        primary
                        title="PRODUTO"
                        weight="bold"
                    />
                    <S.Content>
                        <Image
                            src={x[1].image}
                            alt={x[1].title}
                            width={91}
                            height={114}
                        />
                        <S.Box>
                            <TypographicComponent
                                medium
                                primary
                                title={x[1].title}
                                weight="bold"
                            />
                            <TypographicComponent
                                regular
                                primary
                                title={`R$ ${x[1].price?.toLocaleString('pt-BR', {
                                    minimumFractionDigits: 2,
                                })}`}
                                weight="bold"
                            />
                        </S.Box>
                    </S.Content>
                </S.ContentProduto>
                <S.ContentQtd>
                    <TypographicComponent
                        medium
                        primary
                        title="QTD"
                        weight="bold"
                    />
                    <S.BoxInput>
                        <Smaller />
                        <S.Input type="text" disabled value={x[1].amount} /> <More />
                    </S.BoxInput>
                </S.ContentQtd>
                <S.ContentQtd>
                    <TypographicComponent
                        medium
                        primary
                        title="SUBTOTAL"
                        weight="bold"
                    />
                    <S.BoxInput>
                        <TypographicComponent
                            regular
                            primary
                            title={`R$ ${x[1].price?.toLocaleString('pt-BR', {
                                minimumFractionDigits: 2,
                            })}`}
                            weight="bold"
                        />
                    </S.BoxInput>
                </S.ContentQtd>
                <S.IconBox>
                    <Delete />
                </S.IconBox>
            </S.Grid>
                 </Fragment>
                 )
             })}
            <S.Border />
            <S.ButtonBox>
                <S.Button>FINALIZAR PEDIDO</S.Button>
                <S.BoxTotal>
                    <TypographicComponent
                        medium
                        primary
                        title="SUBTOTAL"
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
                </S.BoxTotal>
            </S.ButtonBox>
        </S.Container>
    )
}

export default CardCheckout
