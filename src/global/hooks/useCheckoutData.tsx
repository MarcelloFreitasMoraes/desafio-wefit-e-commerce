/* eslint-disable react-hooks/exhaustive-deps */
import stale from '@/global/utils/stale'
import { http } from '@/pages/api/api'
import { useMutation, useQuery } from '@tanstack/react-query'
import { ProductList } from '../types/types'
import { useEffect, useState } from 'react'
import { useAlert } from '../Provider/Alert/Alert'

export const CheckoutKey = 'CheckoutData'

export default function useCheckoutData(id?: string | string[] | undefined) {
    const { showAlert } = useAlert()
    const [loading, setLoading] = useState<boolean>(false)

    const query = useQuery<ProductList>(
        [CheckoutKey, id],
        () => {
            return http
                .get(`checkout.json`)
                .then((res) => {
                    return res.data || {}
                })
                .catch((err) => err)
        },
        {
            staleTime: stale.never,
            cacheTime: 0,
            enabled: false,
        }
    )

    const mutation = useMutation(
        (values: ProductList) => {
            const method = 'post'
            const body: any = { ...values, amount: values.amount + 1 }
            return http[method](`checkout.json/`, body)
        },
        {
            onSuccess: () => {
                query.refetch()
                showAlert(
                    'success',
                    'Sucesso! Seu produto foi adicionado ao carrinho.'
                )
            },
            onError: () => {
                showAlert(
                    'error',
                    'Ops! Parece que houve um problema ao adicionar o item ao seu carrinho. Por favor, verifique sua conexão com a internet e tente novamente.'
                )
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
                setLoading(true)
            },
            onError: () => {
                showAlert(
                    'error',
                    'Ops! Parece que houve um problema ao adicionar o item ao seu carrinho. Por favor, verifique sua conexão com a internet e tente novamente.'
                )
                setLoading(false)
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
                showAlert(
                    'success',
                    'Sucesso! Seu produto foi removido do carrinho.'
                )
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
        loading,
        LoadingCheckout:
            query.isLoading ||
            mutation.isLoading ||
            EditMutation.isLoading ||
            DeleteMutation.isLoading ||
            loading ||
            DeleteAllItemsMutation.isLoading,
        CheckoutRefetch: query.refetch(),
    }
}
