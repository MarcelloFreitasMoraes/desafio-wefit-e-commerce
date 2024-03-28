import React from 'react';
import * as S from './CardCheckout.styled';
import Image from 'next/image';
import { More } from '@/global/assets/icons/More';
import { Smaller } from '@/global/assets/icons/Smaller';
import TypographicComponent from '@/global/components/Typographic/Typographic';
import { Delete } from '@/global/assets/icons/Delete';

const ProductRenderer: React.FC<{ data: any[] }> = ({ data }) => {
  return (
    <>
      {data && Object.entries(data)?.map((product) => (
        <S.Grid key={product[1]?.id}>
          <S.ContentProduto>
            <TypographicComponent
              medium
              primary
              title="PRODUTO"
              weight="bold"
            />
            <S.Content>
              <Image
                src={product[1]?.image}
                alt={product[1]?.title}
                width={91}
                height={114}
              />
              <S.Box>
                <TypographicComponent
                  medium
                  primary
                  title={product[1]?.title}
                  weight="bold"
                />
                <TypographicComponent
                  regular
                  primary
                  title={`R$ ${product[1]?.price?.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                  })}`}
                  weight="bold"
                />
              </S.Box>
            </S.Content>
          </S.ContentProduto>
          <S.ContentQtd>
            <TypographicComponent
              medium
              primary
              title="QTD"
              weight="bold"
            />
            <S.BoxInput>
              <Smaller />
              <S.Input type="text" disabled value={product[1]?.amount} /> <More />
            </S.BoxInput>
          </S.ContentQtd>
          <S.ContentQtd>
            <TypographicComponent
              medium
              primary
              title="SUBTOTAL"
              weight="bold"
            />
            <S.BoxInput>
              <TypographicComponent
                regular
                primary
                title={`R$ ${product[1]?.price?.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                })}`}
                weight="bold"
              />
            </S.BoxInput>
          </S.ContentQtd>
          <S.IconBox>
            <Delete />
          </S.IconBox>
        </S.Grid>
      ))}
    </>
  );
};

export default ProductRenderer;
