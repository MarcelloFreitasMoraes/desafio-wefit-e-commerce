import { BaseLayout, Cards, Loading } from '@/global/components'
import * as S from '../../styles/Search.styled'
import { useRouter } from 'next/router'
import useProductsData from '@/global/hooks/useProductsData'
import useCheckoutData from '@/global/hooks/useCheckoutData'
import Empty from '@/global/components/Empty/Empty'
import { useEffect, useState } from 'react'
import Logo from '../../../public/not-product.png'
import Mobile from '../../../public/not-product-mobile.png'

const Search: React.FC = () => {
    const router = useRouter()
    const { id } = router.query
    const { ListProductsQuery, LoadingListProducts } = useProductsData(id)
    const [windowWidth, setWindowWidth] = useState<number>(
        typeof window !== 'undefined' ? window.innerWidth : 0
    )
    const Image = windowWidth <= 768 ? Mobile : Logo
    const noInput = id !== 'undefined' ? false : true

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    

    const { CheckoutQuery, CheckoutMutation } = useCheckoutData()
    const amounts = CheckoutQuery?.data ? Object.values(CheckoutQuery.data) : []

    const amount =
        amounts.find(
            (item: { id: number }) => item.id === ListProductsQuery?.data?.id
        )?.amount || 0

    return (
        <BaseLayout offInput={noInput}>
            {LoadingListProducts ? (
                <Loading />
            ) : (
                <>
                    {id !== 'undefined' ? (
                        <S.ContainerCards>
                            <Cards
                                data={ListProductsQuery.data}
                                action={() =>
                                    CheckoutMutation.mutate({
                                        ...ListProductsQuery.data,
                                    })
                                }
                                amount={amount}
                            />
                        </S.ContainerCards>
                    ) : (
                      <Empty
                            image={Image}
                            title="Parece que não há nada por aqui :("
                        />
                    )}
                </>
            )}
        </BaseLayout>
    )
}

export default Search
