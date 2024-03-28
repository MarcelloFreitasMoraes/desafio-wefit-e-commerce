import stale from '@/global/utils/stale'
import { http } from '@/pages/api/api'
import { useMutation, useQuery } from '@tanstack/react-query'
import { DataProps } from '../types/types'

export const ProductsKey = 'ProductsData'

export default function useProductsData(id?: string | string[] | undefined) { 
    const query = useQuery<any, any, DataProps[], any>(
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

    const mutation = useMutation(
        (values: DataProps) => {
            const method = values.id ? 'put' : 'post'

            const body: any = {
                ...values,
            } as DataProps

            return http[method](`checkout.json/`, ...body)
        },
        {
            onSuccess: () => {
                query.refetch()
            },
        }
    )

    return {
        ListProductsQuery: query,
        ListProductsMutation: mutation,
        LoadingListProducts: query.isLoading || mutation.isLoading
    }
}
