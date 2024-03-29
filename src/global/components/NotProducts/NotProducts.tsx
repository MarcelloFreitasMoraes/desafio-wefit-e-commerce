import Image from 'next/image'
import React from 'react'
import * as S from './NotProducts.styled'
import Logo from '../../../../public/not-product.png'
import TypographicComponent from '../Typographic/Typographic'
import { useRouter } from 'next/router'

const NotProducts: React.FC = () => {
    const router = useRouter()
    return (
        <S.Container>
            <TypographicComponent
                large
                primary
                title={'Parece que não há nada por aqui :('}
                weight="bold"
            />
            <Image src={Logo} width={447} height={265} alt="" />
            <S.Button onClick={() => router.push(`/`)}>
                Recarregar página
            </S.Button>
        </S.Container>
    )
}

export default NotProducts
