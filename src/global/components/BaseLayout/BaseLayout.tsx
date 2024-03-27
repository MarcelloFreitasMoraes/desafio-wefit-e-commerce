import React from "react";
import { Container, Header } from "..";
import * as S from "./BaseLayout.styled"

const BaseLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Container>
        <Header />
        <S.ContainerChildren>
          {children}
        </S.ContainerChildren>
    </Container>
  );
};

export default BaseLayout;
