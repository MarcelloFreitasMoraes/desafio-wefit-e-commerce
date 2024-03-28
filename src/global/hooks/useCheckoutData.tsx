import stale from '@/global/utils/stale'
import { http } from '@/pages/api/api'
import { useMutation, useQuery } from '@tanstack/react-query'
import { DataProps } from '../types/types'

export const CheckoutKey = 'CheckoutData'

export default function useCheckoutData() {
    const query = useQuery<any, any, DataProps[], any>(
        [CheckoutKey],
        () =>
            http
                .get(`checkout.json`)
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
        CheckoutQuery: query,
        CheckoutMutation: mutation,
        LoadingCheckout: query.isLoading || mutation.isLoading
    }
}
