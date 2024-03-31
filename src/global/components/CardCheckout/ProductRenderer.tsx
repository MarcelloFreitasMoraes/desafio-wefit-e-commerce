import * as S from './CardCheckout.styled'
import Image from 'next/image'
import { More } from '@/global/assets/icons/More'
import { Smaller } from '@/global/assets/icons/Smaller'
import TypographicComponent from '@/global/components/Typographic/Typographic'
import { Delete } from '@/global/assets/icons/Delete'
import useCheckoutData from '@/global/hooks/useCheckoutData'
import { CardCheckoutProps } from './types'

const ProductRenderer: React.FC<CardCheckoutProps> = ({ data }) => {
    const { EditMutation, DeleteMutation } = useCheckoutData()
    return (
        <>
            {data &&
                Object.entries(data)?.map(([key, product], index, arr) => {
                    const isUnique =
                        arr.findIndex(([_, p]) => p.id === product.id) === index

                    if (isUnique) {
                        return (
                            <S.Grid key={product.id}>
                                <S.ContentProduto>
                                    <TypographicComponent
                                        medium
                                        primary={'true'}
                                        title="PRODUTO"
                                        weight="bold"
                                    />
                                    <S.Content>
                                        <Image
                                            src={product.image}
                                            alt={product.title}
                                            width={91}
                                            height={114}
                                        />
                                        <S.Box>
                                            <TypographicComponent
                                                medium
                                                primary={'true'}
                                                title={product.title}
                                                weight="bold"
                                            />
                                            <TypographicComponent
                                                regular
                                                primary={'true'}
                                                title={`R$ ${product.price?.toLocaleString(
                                                    'pt-BR',
                                                    {
                                                        minimumFractionDigits: 2,
                                                    }
                                                )}`}
                                                weight="bold"
                                            />
                                        </S.Box>
                                    </S.Content>
                                </S.ContentProduto>
                                <S.ContentQtd>
                                    <TypographicComponent
                                        medium
                                        primary={'true'}
                                        title="QTD"
                                        weight="bold"
                                    />
                                    <S.BoxInput>
                                        <Smaller
                                            action={() =>
                                                EditMutation.mutate({
                                                    id: key,
                                                    decrement: true,
                                                })
                                            }
                                        />
                                        <S.Input
                                            type="text"
                                            disabled
                                            value={product.amount}
                                        />
                                        <More
                                            action={() =>
                                                EditMutation.mutate({
                                                    id: key,
                                                    decrement: false,
                                                })
                                            }
                                        />
                                    </S.BoxInput>
                                </S.ContentQtd>
                                <S.ContentSub>
                                    <TypographicComponent
                                        medium
                                        primary={'true'}
                                        title="SUBTOTAL"
                                        weight="bold"
                                    />
                                    <S.BoxInput>
                                        <TypographicComponent
                                            regular
                                            primary={'true'}
                                            title={`R$ ${product.total?.toLocaleString(
                                                'pt-BR',
                                                {
                                                    minimumFractionDigits: 2,
                                                }
                                            )}`}
                                            weight="bold"
                                        />
                                    </S.BoxInput>
                                </S.ContentSub>
                                <S.IconBox>
                                    <Delete
                                        action={() =>
                                            DeleteMutation.mutate(key)
                                        }
                                    />
                                </S.IconBox>
                            </S.Grid>
                        )
                    }
                    return null
                })}
        </>
    )
}

export default ProductRenderer
