import React, { useEffect, useState } from 'react'
import CardCheckout from '@/global/components/CardCheckout/CardCheckout'
import useCheckoutData from '@/global/hooks/useCheckoutData'
import { BaseLayout, Loading } from '@/global/components'
import CardMobile from '@/global/components/CardCheckout/CardMobile'
import Empty from '@/global/components/Empty/Empty'
import Logo from '../../../public/not-product.png'
import Mobile from '../../../public/not-product-mobile.png'

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
    const Image = windowWidth <= 768 ? Mobile : Logo
           
    return (
        <BaseLayout offInput checkoutQuery={CheckoutQuery}>
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
                        <Empty
                            image={Image}
                            title="Parece que não há nada por aqui :("
                        />
                    )}
                </>
            )}
        </BaseLayout>
    )
}

export default Checkout
