import { Car } from '@/global/assets/icons/Car';
import React from 'react';
import * as S from "./Header.styled";

const Header: React.FC = () => {
  return (
    <S.Wrapper>
        <S.Title>WeMovies</S.Title>
        <S.Content>
        <p>0 items</p>
        <Car/>
        </S.Content>
    </S.Wrapper>
  )
}

export default Header;