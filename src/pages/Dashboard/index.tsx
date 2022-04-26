import React from "react";

import { HighlightCard } from "../../components/HighlightCard";
import {
  TransactionCard,
  TransactionCardProps,
} from "../../components/TransactionCard";

import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGretting,
  UserName,
  UserWrapper,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
} from "./styles";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: "1",
      type: "positive",
      title: "Desenvolvimento de Site",
      amount: "R$ 12.000,00",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      date: "13/04/2022",
    },
    {
      id: "2",
      type: "negative",
      title: "Hamburgueria Delivery",
      amount: "R$ 37,00",
      category: {
        name: "Alimentação",
        icon: "coffee",
      },
      date: "10/04/2022",
    },
    {
      id: "3",
      type: "negative",
      title: "Aluguel do Apartamento",
      amount: "R$ 1.100,00",
      category: {
        name: "Casa",
        icon: "shopping-bag",
      },
      date: "08/04/2022",
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/54554831?v=4",
              }}
            />
            <User>
              <UserGretting>Olá, </UserGretting>
              <UserName>Marcelo</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada em 15 de Abril"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 800,00"
          lastTransaction="Última saída em 22 de Abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.600,00"
          lastTransaction="01 à 22 de Abril"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
