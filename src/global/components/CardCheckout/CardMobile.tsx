import React from 'react'
import TypographicComponent from '../Typographic/Typographic'
import Image from 'next/image'
import * as S from './CardMobile.styled'
import { CardCheckoutProps } from './types'
import { Delete } from '@/global/assets/icons/Delete'
import useCheckoutData from '@/global/hooks/useCheckoutData'
import { Smaller } from '@/global/assets/icons/Smaller'
import { More } from '@/global/assets/icons/More'
import { useRouter } from 'next/router'

const CardMobile: React.FC<CardCheckoutProps> = ({ data, price }) => {
    const router = useRouter()
    const { Edit, DeleteMutation, DeleteAllItemsMutation } = useCheckoutData()

    const handleFinish = () => {
        DeleteAllItemsMutation.mutate()
        router.push(`/purchase`)
    }

    return (
        <S.Conteiners>
            {data &&
                Object.entries(data)?.map(([key, product], index, arr) => {
                    const isUnique =
                        arr.findIndex(([_, p]) => p.id === product.id) === index

                    if (isUnique) {
                        return (
                            <div key={product.id}>
                                <S.Content>
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        width={64}
                                        height={82}
                                    />
                                    <S.Box>
                                        <div>
                                            <TypographicComponent
                                                medium
                                                primary
                                                title={product.title}
                                                weight="bold"
                                            />
                                        </div>
                                        <S.BoxInput>
                                            <Smaller
                                                action={() => {
                                                    Edit.mutate({
                                                        id: key,
                                                        decrement: true,
                                                    })
                                                }}
                                            />
                                            <S.Input
                                                type="text"
                                                disabled
                                                value={product.amount}
                                            />
                                            <More
                                                action={() => {
                                                    Edit.mutate({
                                                        id: key,
                                                        decrement: false,
                                                    })
                                                }}
                                            />
                                        </S.BoxInput>
                                    </S.Box>
                                    <S.Values>
                                        <S.Text>
                                            <TypographicComponent
                                                regular
                                                primary
                                                title={`R$ ${product.price?.toLocaleString(
                                                    'pt-BR',
                                                    {
                                                        minimumFractionDigits: 2,
                                                    }
                                                )}`}
                                                weight="bold"
                                            />
                                        </S.Text>
                                        <S.ContentSub>
                                            <div>
                                                <Delete
                                                    width={16}
                                                    height={18}
                                                    action={() =>
                                                        DeleteMutation.mutate(
                                                            key
                                                        )
                                                    }
                                                />
                                            </div>
                                            <S.ContentQtd>
                                                <TypographicComponent
                                                    medium
                                                    primary
                                                    title="SUBTOTAL"
                                                    weight="bold"
                                                />
                                                <TypographicComponent
                                                    regular
                                                    primary
                                                    title={`R$ ${product.total?.toLocaleString(
                                                        'pt-BR',
                                                        {
                                                            minimumFractionDigits: 2,
                                                        }
                                                    )}`}
                                                    weight="bold"
                                                />
                                            </S.ContentQtd>
                                        </S.ContentSub>
                                    </S.Values>
                                </S.Content>
                                <S.Border />
                            </div>
                        )
                    }
                    return null
                })}
            <>
                <S.BoxTotal>
                    <TypographicComponent
                        medium
                        primary
                        title="TOTAL"
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
                <S.Button onClick={handleFinish}>FINALIZAR PEDIDO</S.Button>
            </>
        </S.Conteiners>
    )
}

export default CardMobile
