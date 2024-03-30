import { BaseLayout, Cards, Loading } from '@/global/components'
import * as S from './SpecificFilme.styled'
import { useRouter } from 'next/router'
import useProductsData from '@/global/hooks/useProductsData'
import useCheckoutData from '@/global/hooks/useCheckoutData'
import Empty from '@/global/components/Empty/Empty'

const Search: React.FC = () => {
    const router = useRouter()
    const { id } = router.query
    const { ListProductsQuery, LoadingListProducts } = useProductsData(id)
    const { CheckoutQuery, CheckoutMutation } = useCheckoutData()
    const amounts = CheckoutQuery?.data ? Object.values(CheckoutQuery.data) : []

    const amount =
        amounts.find(
            (item: { id: number }) => item.id === ListProductsQuery?.data?.id
        )?.amount || 0

    return (
        <BaseLayout>
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
                        <Empty image="/film.gif" title="Ops! nenhum filme encontrado." />
                    )}
                </>
            )}
        </BaseLayout>
    )
}

export default Search
