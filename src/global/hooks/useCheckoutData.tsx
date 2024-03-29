import stale from '@/global/utils/stale'
import { http } from '@/pages/api/api'
import { useMutation, useQuery } from '@tanstack/react-query'
import { ProductList } from '../types/types'
import { useEffect } from 'react'

export const CheckoutKey = 'CheckoutData'

export default function useCheckoutData(id?: string | string[] | undefined) {
    const query = useQuery<ProductList>(
        [CheckoutKey, id],
        () =>
            http
                .get(`checkout.json`)
                .then((res) => {
                    return res.data || []
                })
                .catch((err) => err),
        {
            staleTime: stale.never,
            cacheTime: 0,
            enabled: Boolean(id),
        }
    )

    const mutation = useMutation(
        (values: ProductList) => {
            const method = 'post'
            let body: any = { ...values, amount: values.amount + 1 }
            return http[method](`checkout.json/`, body)
        },
        {
            onSuccess: () => {
                query.refetch()
            },
        }
    )

    const Editmutation = useMutation(
        async ({ id, decrement }: { id: string; decrement?: boolean }) => {
            try {
                let newTotal
                const response =
                    query.data && Object.entries(query.data)[0]?.[1]
                let currentAmount: number = response?.amount
                const newAmount = decrement
                    ? currentAmount - 1
                    : currentAmount + 1

                if (decrement && currentAmount > 0) {
                    newTotal = Math.abs(response?.price - response?.total)
                } else {
                    newTotal = response?.price + response?.total
                }

                await http.patch(`checkout/${id}.json/`, {
                    amount: newAmount,
                    total: newTotal,
                })
                query.refetch()
            } catch (error) {
                console.error(error)
                throw error
            }
        },
        {
            onSuccess: () => {
                query.refetch()
            },
        }
    )

    const Deletemutation = useMutation(
        async (id: string) => {
            try {
                await http.delete(`checkout/${id}.json/`)
                query.refetch()
            } catch (error) {
                console.error(error)
                throw error
            }
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
            Deletemutation.mutate(del)
        }
    }, [query.data])

    return {
        CheckoutQuery: query,
        CheckoutMutation: mutation,
        LoadingCheckout:
            mutation.isLoading ||
            query.isLoading ||
            Editmutation.isLoading ||
            Deletemutation.isLoading,
        CheckoutRefetch: query.refetch(),
        Edit: Editmutation,
        DeleteMutation: Deletemutation,
    }
}
