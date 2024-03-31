import { BaseLayout, Cards, Loading } from '@/global/components'
import useProductsData from '@/global/hooks/useProductsData'
import Head from 'next/head'
import * as S from '../styles/styled'
import { Fragment } from 'react'
import useCheckoutData from '@/global/hooks/useCheckoutData'

export default function Home() {
    const { ListProductsQuery } = useProductsData()
    const { CheckoutQuery, CheckoutMutation, LoadingCheckout } =
        useCheckoutData()
    const amounts = CheckoutQuery?.data ? Object.values(CheckoutQuery.data) : []

    return (
        <BaseLayout>
            <Head>
                <title>Desafio WeFit</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {LoadingCheckout ? (
                <Loading />
            ) : (
                <S.ContainerCards>
                    {ListProductsQuery?.data &&
                        Object.entries(ListProductsQuery?.data)?.map((x) => {
                            const product = x[1]
                            const amount =
                                amounts.find(
                                    (item: { id: number }) =>
                                        item.id === product.id
                                )?.amount || 0

                            return (
                                <Fragment key={product?.id}>
                                    <Cards
                                        data={product}
                                        amount={amount}
                                        action={() =>
                                            CheckoutMutation.mutate({
                                                ...product,
                                            })
                                        }
                                    />
                                </Fragment>
                            )
                        })}
                </S.ContainerCards>
            )}
        </BaseLayout>
    )
}
