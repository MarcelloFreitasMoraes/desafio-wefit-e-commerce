import stale from '@/global/utils/stale'
import { http } from '@/pages/api/api'
import { useQuery } from '@tanstack/react-query'
import { ProductList } from '../types/types'

export const ProductsKey = 'ProductsData'

export default function useProductsData(id?: string | string[] | undefined) { 
    const query = useQuery<ProductList[]>(
        [ProductsKey, id],
        () =>
            http
                .get(id ? `products/${id}.json/` : `products.json`)
                .then((res) => {
                    return res?.data || []
                })
                .catch((err) => err),
        {
            staleTime: stale.never,
            cacheTime: 0,
            enabled: true,
        }
    )    
    
    return {
        ListProductsQuery: query,       
        LoadingListProducts: query.isLoading,
    }
}
