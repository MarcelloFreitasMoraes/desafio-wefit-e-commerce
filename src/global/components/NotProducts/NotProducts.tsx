import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import * as S from './NotProducts.styled'
import Logo from '../../../../public/not-product.png'
import Mobile from '../../../../public/not-product-mobile.png'
import TypographicComponent from '../Typographic/Typographic'
import { useRouter } from 'next/router'

const NotProducts: React.FC = () => {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    const router = useRouter()

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    return (
        <S.Container>
            <TypographicComponent
                large
                primary
                title={'Parece que não há nada por aqui :('}
                weight="bold"
            />
            <Image src={windowWidth <= 768 ? Mobile : Logo} alt="reload" />
            <S.Button onClick={() => router.push(`/`)}>
                Recarregar página
            </S.Button>
        </S.Container>
    )
}

export default NotProducts
