import { BaseLayout, Cards, Loading } from '@/global/components'
import * as S from './SpecificFilme.styled'
import { useRouter } from 'next/router'
import useProductsData from '@/global/hooks/useProductsData'

const Search: React.FC = () => {
    const router = useRouter()
    const { id } = router.query
    const { ListProductsQuery, LoadingListProducts } = useProductsData(id)

    return (
        <BaseLayout>
            {LoadingListProducts ? (
                <Loading />
            ) : (
                <S.ContainerCards>
                    <Cards
                        data={ListProductsQuery?.data}                       
                        action={() => {}}
                    />
                </S.ContainerCards>
            )}
        </BaseLayout>
    )
}

export default Search
