import React from 'react';
import { View, Text, Image } from 'react-native';
import { Marker, Callout } from 'react-native-maps';

import styles from './styles';

export default function DevMarker({ dev }) {
  return (
    <Marker
      coordinate={{
        latitude: dev.location.coordinates[0],
        longitude: dev.location.coordinates[1]
      }}
    >
      <Image
        source={{
          uri: dev.avatar_url
        }}
        style={styles.avatar}
      />

      <Callout
        onPress={() => {
          navigation.navigate('Profile', {
            github_username: dev.github_username
          });
        }}
      >
        <View style={styles.callout}>
          <Text style={styles.devName}>{dev.name}</Text>
          <Text style={styles.devBio}>{dev.bio}</Text>
          <Text style={styles.devTechs}>{dev.techs.join(',  ')}</Text>
        </View>
      </Callout>
    </Marker>
  );
}
