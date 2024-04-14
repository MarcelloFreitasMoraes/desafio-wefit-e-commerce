/* eslint-disable react-hooks/exhaustive-deps */
import stale from '@/global/utils/stale'
import { http } from '@/pages/api/api'
import { useMutation, useQuery } from '@tanstack/react-query'
import { ProductList } from '../types/types'
import { useEffect} from 'react'

export const CheckoutKey = 'CheckoutData'

export default function useCheckoutData(id?: string | string[] | undefined) {
    const query = useQuery<ProductList>(
        [CheckoutKey, id],
        async () => {
            try {
                const res = await http
                    .get(`checkout.json`)
                return res.data || {}
            } catch (err) {
                return err
            }
        },
        {
            staleTime: stale.never,
            cacheTime: 0,
            enabled: Boolean(id),
        }
    )

    const mutation = useMutation(
        (values: ProductList) => {
            const method = 'post'
            const body = { ...values, amount: values.amount + 1 }
            return http[method](`checkout.json/`, body)
        },
        {
            onSuccess: () => {
                query.refetch()               
            },       
        }
    )

    const EditMutation = useMutation(
        async ({ id, decrement }: { id: string; decrement?: boolean }) => {
            const method = 'patch'
            let newTotal
            const response = await http.get(`checkout/${id}.json/`)
            const currentAmount = response?.data?.amount
            const newAmount = decrement ? currentAmount - 1 : currentAmount + 1
          
            if (decrement) {
                newTotal = Math.abs(
                    response?.data?.price - response?.data?.total
                )
            } else {
                newTotal = response?.data?.price + response?.data?.total
            }
            const bodyPatch = { amount: newAmount, total: newTotal }
           
            return http[method](`checkout/${id}.json/`, bodyPatch)
        },
        {
            onSuccess: () => {
                query.refetch()
            },         
        }
    )

    const DeleteMutation = useMutation(
        (id?: string) => {
            const method = 'delete'
            const action = id ? `checkout/${id}.json/` : `checkout.json/`;
            return http[method](`${action}`)
        },
        {
            onSuccess: () => {
                query.refetch()               
            },         
        }
    )

    const DeleteAllItemsMutation = useMutation(
        () => {
            const method = 'delete'
            return http[method](`checkout.json/`)
        },
        {
            onSuccess: () => {
                query.refetch()
            },
        }
    )

    useEffect(() => {
        const del = query.data && Object.entries(query.data)[0]?.[0]
        if (
            del &&
            query.data &&
            Object.entries(query.data)[0]?.[1]?.amount === 0
        ) {
            DeleteMutation.mutate(del)
        }
    }, [query.data])

    return {
        CheckoutQuery: query,
        CheckoutMutation: mutation,
        EditMutation,
        DeleteMutation,
        DeleteAllItemsMutation,
        LoadingCheckout:
            mutation.isLoading ||
            EditMutation.isLoading ||
            DeleteMutation.isLoading ||
            DeleteAllItemsMutation.isLoading,
    }
}
