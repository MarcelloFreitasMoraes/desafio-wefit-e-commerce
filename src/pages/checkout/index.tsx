import React from 'react'
import CardCheckout from '@/global/components/CardCheckout/CardCheckout'
import useCheckoutData from '@/global/hooks/useCheckoutData'
import { BaseLayout, Loading } from '@/global/components'
import Empty from '@/global/components/Empty/Empty'

const Checkout: React.FC = () => {
    const { CheckoutQuery, LoadingCheckout } = useCheckoutData()
    const total = CheckoutQuery?.data
        ? Object.values(CheckoutQuery.data).reduce(
              (acc, item) => acc + item.total,
              0
          )
        : 0

    return (
        <BaseLayout offInput>
            {LoadingCheckout ? (
                <Loading />
            ) : (
                <>
                    {CheckoutQuery?.data &&
                    Object.keys(CheckoutQuery.data).length > 0 ? (
                        <CardCheckout
                            price={total}
                            data={CheckoutQuery?.data}
                        />
                    ) : (
                        <Empty />
                    )}
                </>
            )}
        </BaseLayout>
    )
}

export default Checkout
