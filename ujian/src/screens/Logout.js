import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Logout = ({navigation}) => {
  const eventLogout = () => {
    AsyncStorage.removeItem('user')
      .then(() => {
        navigation.navigate('Login');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View>
      <Text>Logout</Text>
      <Button title="LOGOUT" onPress={eventLogout} style={{marginTop: 50}} />
    </View>
  );
};

export default Logout;
