import React, {  } from 'react'
// import * as S from './Checkout.styled'
import CardCheckout from '@/global/components/CardCheckout/CardCheckout'
import useCheckoutData from '@/global/hooks/useCheckoutData'

const Checkout: React.FC = () => {
    const { CheckoutQuery, LoadingCheckout } = useCheckoutData()
    // console.log(CheckoutQuery.data, 'CheckoutQuery')

    return (
        <>
            {/* {CheckoutQuery?.data && Object.entries(CheckoutQuery?.data)?.map((x: any) => {
                    console.log(x, 'xXx');
                    
                    return (
                        <Fragment key={x[1].id}> */}
                            <CardCheckout
                                // amount={x[1].amount}
                                // image={x[1].image}
                                price={CheckoutQuery?.data?.price || 0}
                                // title={x[1].title}
                                data={CheckoutQuery?.data}
                            />
                            {/* <S.Border/> */}
                        {/* </Fragment>
                    )
                })} */}
        </>
    )
}

export default Checkout
