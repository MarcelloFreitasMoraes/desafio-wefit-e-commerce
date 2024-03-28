import { Cards, Loading } from '@/global/components'
import * as S from './SpecificFilme.styled'
import { useRouter } from 'next/router'
import useProductsData from '@/global/hooks/useProductsData'

const Search: React.FC = () => {
    const router = useRouter()
    const { id } = router.query
    const { ListProductsQuery, LoadingListProducts } = useProductsData(id)

    return (
        <>
            {LoadingListProducts ? (
                <Loading />
            ) : (
                <S.ContainerCards>
                    <Cards
                        amount={ListProductsQuery?.data?.amount ?? 0} 
                        image={ListProductsQuery?.data?.image ?? ''}
                        price={ListProductsQuery?.data?.price ?? 0} 
                        title={ListProductsQuery?.data?.title ?? ''} 
                        action={() => {}}
                    />
                </S.ContainerCards>
            )}
        </>
    )
}

export default Search
