import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import TypographicComponent from '../Typographic/Typographic';
import useCheckoutData from '@/global/hooks/useCheckoutData';
import * as S from './CardMobile.styled';
import { CardCheckoutProps } from './types';
import { Smaller } from '@/global/assets/icons/Smaller';
import { More } from '@/global/assets/icons/More';
import { Delete } from '@/global/assets/icons/Delete';

const CardMobile: React.FC<CardCheckoutProps> = ({ data, price }) => {
    const router = useRouter();
    const { Edit, DeleteMutation, DeleteAllItemsMutation } = useCheckoutData();

    const handleEdit = (key: string, decrement: boolean) => {
        Edit.mutate({ id: key, decrement });
    };

    const handleDelete = (key: string) => {
        DeleteMutation.mutate(key);
    };

    const handleFinish = () => {
        DeleteAllItemsMutation.mutate();
        router.push('/purchase');
    };

    return (
        <S.Conteiners>
            {data &&
                Object.entries(data)?.map(([key, product], index, arr) => {
                    const isUnique =
                        arr.findIndex(([_, p]) => p.id === product.id) === index;

                    if (isUnique) {
                        return (
                            <div key={product.id}>
                                <S.Content>
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        width={64}
                                        height={82}
                                    />
                                    <S.Box>
                                        <div>
                                            <TypographicComponent
                                                medium
                                                primary
                                                title={product.title}
                                                weight="bold"
                                            />
                                        </div>
                                        <S.BoxInput>
                                            <Smaller action={() => handleEdit(key, true)} />
                                            <S.Input type="text" disabled value={product.amount} />
                                            <More action={() => handleEdit(key, false)} />
                                        </S.BoxInput>
                                    </S.Box>
                                    <S.Values>
                                        <S.Text>
                                            <TypographicComponent
                                                regular
                                                primary
                                                title={`R$ ${product.price?.toLocaleString(
                                                    'pt-BR',
                                                    {
                                                        minimumFractionDigits: 2,
                                                    }
                                                )}`}
                                                weight="bold"
                                            />
                                        </S.Text>
                                        <S.ContentSub>
                                            <div>
                                                <Delete
                                                    width={16}
                                                    height={18}
                                                    action={() => handleDelete(key)}
                                                />
                                            </div>
                                            <S.ContentQtd>
                                                <TypographicComponent
                                                    medium
                                                    primary
                                                    title="SUBTOTAL"
                                                    weight="bold"
                                                />
                                                <TypographicComponent
                                                    regular
                                                    primary
                                                    title={`R$ ${product.total?.toLocaleString(
                                                        'pt-BR',
                                                        {
                                                            minimumFractionDigits: 2,
                                                        }
                                                    )}`}
                                                    weight="bold"
                                                />
                                            </S.ContentQtd>
                                        </S.ContentSub>
                                    </S.Values>
                                </S.Content>
                                <S.Border />
                            </div>
                        );
                    }
                    return null;
                })}
            <>
                <S.BoxTotal>
                    <TypographicComponent
                        medium
                        primary
                        title="TOTAL"
                        weight="bold"
                    />
                    <TypographicComponent
                        regular
                        primary
                        title={`R$ ${price?.toLocaleString('pt-BR', {
                            minimumFractionDigits: 2,
                        })}`}
                        weight="bold"
                    />
                </S.BoxTotal>
                <S.Button onClick={handleFinish}>FINALIZAR PEDIDO</S.Button>
            </>
        </S.Conteiners>
    );
};

export default CardMobile;
