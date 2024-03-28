import React from 'react';
import * as S from './CardCheckout.styled';
import TypographicComponent from '../Typographic/Typographic';
import { CardCheckoutProps } from './types';
import ProductRenderer from './ProductRenderer';

const CardCheckout: React.FC<CardCheckoutProps> = ({ data, price }) => {
  return (
    <S.Container>
      {data && <ProductRenderer data={data} />}
      <S.Border />
      <S.ButtonBox>
        <S.Button>FINALIZAR PEDIDO</S.Button>
        <S.BoxTotal>
          <TypographicComponent
            medium
            primary
            title="SUBTOTAL"
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
      </S.ButtonBox>
    </S.Container>
  );
};

export default CardCheckout;
