import React, { useState, useEffect } from 'react';

import api from './services/api';

import './global.css';

import { Container, Sidebar, Title, Main, DevList } from './App.styles';

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';

export default function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post('/devs', data);
    setDevs([...devs, response.data]);
  }

  return (
    <Container>
      <Sidebar>
        <Title>Cadastrar</Title>
        <DevForm onSubmit={handleAddDev} />
      </Sidebar>

      <Main>
        <DevList>
          {devs && devs.map(dev => <DevItem key={dev._id} dev={dev} />)}
        </DevList>
      </Main>
    </Container>
  );
}
