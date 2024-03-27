import React from 'react';
import Image from 'next/image';
import * as S from "./Cards.styled"
import { MeCar } from '@/global/assets/icons/meCar';

const Cards: React.FC = () => {
  return (
    <S.Container>
      <S.Box>
      <Image src={'https://wefit-react-web-test.s3.amazonaws.com/viuva-negra.png'} alt={'produtos'} width={147} height={188} />
      <p>NOME PRODUTO</p>
      <p>Preço</p>
      </S.Box>
      <div>        
        <S.Button><MeCar/> 0 {' '}ADICIONAR AO CARRINHO</S.Button>
      </div>
    </S.Container>
  );
}

export default Cards;