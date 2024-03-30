import React, { useEffect, useState } from 'react'
import CardCheckout from '@/global/components/CardCheckout/CardCheckout'
import useCheckoutData from '@/global/hooks/useCheckoutData'
import { BaseLayout, Loading } from '@/global/components'
import Empty from '@/global/components/Empty/Empty'
import CardMobile from '@/global/components/CardCheckout/CardMobile'

const Checkout: React.FC = () => {
    const { CheckoutQuery, LoadingCheckout } = useCheckoutData()
    const [windowWidth, setWindowWidth] = useState<number>(
        typeof window !== 'undefined' ? window.innerWidth : 0
    )

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

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
                        <>
                            {windowWidth <= 768 ? (
                                <CardMobile
                                    data={CheckoutQuery?.data}
                                    price={total}
                                />
                            ) : (
                                <CardCheckout
                                    price={total}
                                    data={CheckoutQuery?.data}
                                />
                            )}
                        </>
                    ) : (
                        <Empty />
                    )}
                </>
            )}
        </BaseLayout>
    )
}

export default Checkout
