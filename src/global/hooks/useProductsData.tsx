import stale from '@/global/utils/stale'
import { http } from '@/pages/api/api'
import { useQuery} from '@tanstack/react-query'

export const ProductsKey = 'ProductsData'

export default function useProductsData() {
    const query = useQuery<any, any, any[], any>(
        [ProductsKey],
        () =>
            http
                .get(`products.json`)
                .then((res) => {
                    return res?.data
                })
                .catch((err) => err),
        {
            staleTime: stale.never,
            cacheTime: 0,
            enabled: true,
        }
    )

    // const mutation = useMutation(
    //     (values: CreateClientFormData) => {
    //         const method = values.id ? 'put' : 'post'

    //         const body: any = {
    //             ...values,
    //         } as CreateClientFormData

    //         return http[method](`Cliente/`, ...body)
    //     },
    //     {
    //         onSuccess: ({ data }) => {
    //             console.log('mutation membro', data)
    //             query.refetch()
    //         },
    //     }
    // )

    return {
        ClientQuery: query,
        // ClientMutation: mutation,
    }
}
