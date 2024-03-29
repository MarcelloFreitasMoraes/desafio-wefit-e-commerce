import React from 'react'
import CardCheckout from '@/global/components/CardCheckout/CardCheckout'
import useCheckoutData from '@/global/hooks/useCheckoutData'
import { BaseLayout} from '@/global/components'

const Checkout: React.FC = () => {
    const { CheckoutQuery } = useCheckoutData()
    return (
        <BaseLayout offInput>       
        <CardCheckout
            price={CheckoutQuery?.data?.price || 0}
            data={CheckoutQuery?.data}
        />
        </BaseLayout>
    )
}

export default Checkout
