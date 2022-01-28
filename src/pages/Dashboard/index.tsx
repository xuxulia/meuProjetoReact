import React from "react";
import {Container, Title, Form} from './styles';

const Dashboard: React.FC = () => {

    return (
        <Container>
        <Title>Pesquise endereços por CEP</Title>

        <Form>
            <input type="text" placeholder = "Digite o Cep" />
            <button type="submit">Pesquisar</button>
        </Form>
        </Container>

    );

};

export default Dashboard;