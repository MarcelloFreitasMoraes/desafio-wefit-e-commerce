import React, { useState } from 'react'
import { Container, Header, InputField } from '..'
import * as S from './BaseLayout.styled'
import { BaseLayoutProps } from './types'
import useProductsData from '@/global/hooks/useProductsData'
import { useRouter } from 'next/router'

const BaseLayout: React.FC<BaseLayoutProps> = ({ children, offInput, checkoutQuery }) => {   
    const { ListProductsQuery } = useProductsData()
    const router = useRouter()
    const [value, setValue] = useState<string>('')
    const [data, setData] = useState<any>(
        ListProductsQuery?.data && Object.entries(ListProductsQuery.data)
    )
    let itemCount = 0

    if (checkoutQuery?.data && Object.keys(checkoutQuery?.data).length > 0) {
        itemCount = checkoutQuery?.data && Object.keys(checkoutQuery?.data).length
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
        if (value.trim() !== '') {
            router.push(`/search?id=${data[0]?.[0]}`)          
        } else {
            router.push(`/search`)          
        }
    }

    return (
        <Container>
            <Header amount={itemCount || 0} />
            <S.ContainerInput>
                {!offInput && (
                        <InputField
                            onSearch={handleSearch}
                            onChange={handleInputChange}
                            value={value}
                            data={data}
                        />                    
                )}
            </S.ContainerInput>
            <S.ContainerChildren>{children}</S.ContainerChildren>
        </Container>
    )
}

export default BaseLayout
