import Image from 'next/image'
import React from 'react'
import * as S from '../../styles/purchase.styled'
import TypographicComponent from '@/global/components/Typographic/Typographic'
import { useRouter } from 'next/router'
import Logo from '../../../public/complet.png'
import { BaseLayout, Button } from '@/global/components'

const Purchase: React.FC = () => {
    const router = useRouter()
    return (
        <BaseLayout offInput>
            <S.Container>
                <TypographicComponent
                    large
                    primary={'true'}
                    title={'Compra realizada com sucesso!'}
                    weight="bold"
                />
                <Image src={Logo} alt="car" />
                <Button
                    onClick={() => router.push(`/`)}
                    label="Voltar"
                    width="173px"
                />
            </S.Container>
        </BaseLayout>
    )
}

export default Purchase
