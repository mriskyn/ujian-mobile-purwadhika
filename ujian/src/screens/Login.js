import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import {Input} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('user')
      .then((data) => {
        console.log('user', data);
        if (data) {
          navigation.navigate('Home');
          setLoading(true);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {
        setLoading(true);
      });
  });

  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const submitForm = async () => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(form));
      setForm({username: '', password: ''});
      navigation.navigate('Home');
    } catch (err) {
      console.log(err);
    }
  };

  if (!loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Login</Text>
      <Input
        placeholder="Username"
        value={form.username}
        onChangeText={(text) => setForm({...form, username: text})}
      />
      <Input
        placeholder="Password"
        value={form.password}
        secureTextEntry={true}
        onChangeText={(text) => setForm({...form, password: text})}
      />
      <Button title="LOGIN" onPress={submitForm} />
    </View>
  );
};

export default Login;
