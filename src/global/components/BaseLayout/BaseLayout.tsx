import React, { useState } from 'react'
import { Container, Header, InputField } from '..'
import * as S from './BaseLayout.styled'
import { BaseLayoutProps } from './types'
import useCheckoutData from '@/global/hooks/useCheckoutData'
import useProductsData from '@/global/hooks/useProductsData'
import { useRouter } from 'next/router'

const BaseLayout: React.FC<BaseLayoutProps> = ({ children, offInput }) => {
    const { CheckoutQuery } = useCheckoutData()
    const { ListProductsQuery } = useProductsData()
    const router = useRouter()
    const [value, setValue] = useState<string>('')
    const [data, setData] = useState<any>(
        ListProductsQuery?.data && Object.entries(ListProductsQuery.data)
    )

    let itemCount = 0

    if (CheckoutQuery.data && Object.keys(CheckoutQuery.data).length > 0) {
        itemCount = CheckoutQuery.data && Object.keys(CheckoutQuery.data).length
    }

    const removeAccents = (str: string) => {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value
        setValue(inputValue)

        const filteredData =
            ListProductsQuery?.data &&
            Object.entries(ListProductsQuery.data).filter(([key, value]) =>
                removeAccents(value.title.toLowerCase()).includes(
                    removeAccents(inputValue.toLowerCase())
                )
            )

        setData(filteredData)
    }

    const handleSearch = () => {
        router.push(`/search?id=${data[0]?.[0]}`)
    }

    return (
        <Container>
            <Header amount={itemCount || 0} />
            <div>
                {!offInput && (
                    <>
                        <InputField
                            onSearch={handleSearch}
                            onChange={handleInputChange}
                            value={value}
                            data={data}
                        />
                    </>
                )}
            </div>
            <S.ContainerChildren>{children}</S.ContainerChildren>
        </Container>
    )
}

export default BaseLayout
