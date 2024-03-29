import React from 'react'
import * as S from './CardCheckout.styled'
import TypographicComponent from '../Typographic/Typographic'
import { CardCheckoutProps } from './types'
import ProductRenderer from './ProductRenderer'
import useCheckoutData from '@/global/hooks/useCheckoutData'
import { useRouter } from 'next/router'

const CardCheckout: React.FC<CardCheckoutProps> = ({ data, price }) => {
    const { DeleteAllItemsMutation } = useCheckoutData()
    const router = useRouter()

    const handleFinish = () => {
        DeleteAllItemsMutation.mutate()
        router.push(`/purchase`)
    }

    return (
        <S.Container>
            {data && <ProductRenderer data={data} />}
            <S.Border />
            <S.ButtonBox>
                <S.Button onClick={handleFinish}>FINALIZAR PEDIDO</S.Button>
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
            </S.ButtonBox>
        </S.Container>
    )
}

export default CardCheckout
