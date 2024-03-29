import Image from 'next/image'
import React from 'react'
import * as S from './Empty.styled'
import Car from '../../../../public/empty.gif'
import TypographicComponent from '../Typographic/Typographic'
import { useRouter } from 'next/router'

const Empty: React.FC = () => {
    const router = useRouter()
    return (
        <S.Container>
            <TypographicComponent
                large
                primary
                title={'Seu carrinho está vazio!!!'}
                weight="bold"
            />
            <Image src={Car}  alt="empty" />
            <S.Button onClick={() => router.push(`/`)}>
                Vá as compras
            </S.Button>
        </S.Container>
    )
}

export default Empty
