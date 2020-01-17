import React, { useState, useEffect } from 'react';

import {
  RegisterForm,
  InputBlock,
  InputGroup,
  Label,
  TextInput,
  SubmitButton
} from './styles';

export default function DevForm({ onSubmit }) {
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (github_username && techs && latitude && longitude) {
      await onSubmit({
        github_username,
        techs,
        latitude,
        longitude
      });
    }

    setGithubUsername('');
    setTechs('');
  }

  return (
    <RegisterForm onSubmit={handleSubmit}>
      <InputBlock className="input-block">
        <Label htmlFor="github_username">Usuário do Github</Label>
        <TextInput
          name="github_username"
          id="github_username"
          onChange={e => setGithubUsername(e.target.value)}
          valeu={github_username}
          required
        />
      </InputBlock>

      <InputBlock className="input-block">
        <Label htmlFor="techs">Tecnologias que usa</Label>
        <TextInput
          name="techs"
          id="techs"
          value={techs}
          onChange={e => setTechs(e.target.value)}
          required
        />
      </InputBlock>

      <InputGroup className="input-group">
        <InputBlock className="input-block">
          <Label htmlFor="latitude">Latitude</Label>
          <TextInput
            name="latitude"
            id="latitude"
            value={latitude}
            onChange={e => setLatitude(e.target.value)}
            required
          />
        </InputBlock>

        <InputBlock className="input-block">
          <Label htmlFor="longitude">Longitude</Label>
          <TextInput
            name="longitude"
            id="longitude"
            value={longitude}
            onChange={e => setLatitude(e.target.value)}
            required
          />
        </InputBlock>
      </InputGroup>
      <SubmitButton type="submit">Salvar</SubmitButton>
    </RegisterForm>
  );
}
