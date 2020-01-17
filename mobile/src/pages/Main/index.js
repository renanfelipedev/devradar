import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Mapview from 'react-native-maps';

import {
  requestPermissionsAsync,
  getCurrentPositionAsync
} from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles';

import api from '../../services/api';

import DevMarker from '../DevMarker';

export default function Main({ navigation }) {
  const [currentRegion, setCurrentRegion] = useState(null);
  const [techs, setTechs] = useState('');
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04
        });
      }
    }
    loadInitialPosition();
  }, []);

  async function loadDevs() {
    const { latitude, longitude } = currentRegion;
    const response = await api.get('/search', {
      params: {
        latitude,
        longitude,
        techs: techs
      }
    });
    setDevs(response.data.devs);
  }

  async function handleRegionChange(region) {
    setCurrentRegion(region);
  }

  if (!currentRegion) {
    return null;
  }

  return (
    <>
      <Mapview
        onRegionChangeComplete={handleRegionChange}
        initialRegion={currentRegion}
        style={styles.map}
      >
        {devs.map(dev => (
          <DevMarker key={dev._id} dev={dev} />
        ))}
      </Mapview>

      <View style={styles.searchForm}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar devs por techs..."
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={techs}
          onChangeText={setTechs}
        />
        <TouchableOpacity onPress={loadDevs} style={styles.loadButton}>
          <MaterialIcons name="my-location" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
    </>
  );
}
