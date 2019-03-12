import React from 'react';
import Typography from '../Typography';
import Button from '../Button';
import { Paragraph } from '../../global/commonStyles';
import { Wrapper, Container, CompaniesWrapper } from '../Clients/Clients.style';
import BrazzersIcon from '../Icons/BrazzersIcon';
import PornhubIcon from '../Icons/PornhubIcon';

const Clients = () => {
  return (
    <Wrapper>
      <Container>
        <Typography component='h2' headingVariant='heading'>
          Z kim współpracowaliśmy?
        </Typography>

        <Paragraph margin={40} maxWidth={580}>
          Zaufali nam klienci niemal ze wszystkich branż. Kilka lat na rynku
          oraz doświadczenie z pracy z wieloma firmami utwierdziło nas w
          przekonaniu jak wiele do każdego biznesu może wnieść reklama
          internetowa. Jesteśmy profesjonalistami, którzy potrafią słuchać
          Klientów i pracować na ich sukces.
        </Paragraph>

        <CompaniesWrapper>
          <BrazzersIcon />
          <PornhubIcon />
          <BrazzersIcon />
          <PornhubIcon />
          <BrazzersIcon />
          <PornhubIcon />
        </CompaniesWrapper>

        <Button isCentered>Skontaktuj się</Button>
      </Container>
    </Wrapper>
  );
};

export default Clients;