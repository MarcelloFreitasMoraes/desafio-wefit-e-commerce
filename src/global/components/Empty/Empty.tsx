import Image from 'next/image'
import React from 'react'
import * as S from './Empty.styled'
import TypographicComponent from '../Typographic/Typographic'
import { useRouter } from 'next/router'
import { EmptyProps } from './types'
import { Button } from '..'

const Empty: React.FC<EmptyProps> = ({ image, title }) => {
    const router = useRouter()
    return (
        <S.Container>
            <TypographicComponent large primary={'true'} title={title} weight="bold" />
            <S.ImageBox>
                <Image src={image} layout="fill" alt="reload" />
            </S.ImageBox>
            <Button
                onClick={() => router.push(`/`)}
                label="Recarregar página"
                width="173px"
            />
        </S.Container>
    )
}

export default Empty
