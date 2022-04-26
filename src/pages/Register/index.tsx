import React from "react";
import { Input } from "../../components/Form/Input/index";
import { Container, Header, Title } from "./styles";

export function Register() {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Input placeholder="Test" />
    </Container>
  );
}
