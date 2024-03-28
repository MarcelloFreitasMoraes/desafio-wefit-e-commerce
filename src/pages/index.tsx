import { Cards, Loading } from '@/global/components'
import useProductsData from '@/global/hooks/useProductsData'
import Head from 'next/head'
import * as S from '../styles/Home.styled'
import { Fragment } from 'react'

export default function Home() {
    const { ListProductsQuery, LoadingListProducts } = useProductsData()

    return (
        <>
            <Head>
                <title>Desafio WeFit</title>              
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {LoadingListProducts ? (
                <Loading />
            ) : (
                <S.ContainerCards>
                    {ListProductsQuery?.data && Object.entries(ListProductsQuery.data)?.map(
                        (x: any) => (
                            <Fragment key={x[1].id}>
                                <Cards
                                    amount={x[1]?.amount}
                                    image={x[1]?.image}
                                    price={x[1]?.price}
                                    title={x[1]?.title}
                                    action={() => {}}
                                />
                            </Fragment>
                        )
                    )}
                </S.ContainerCards>
            )}
        </>
    )
}
