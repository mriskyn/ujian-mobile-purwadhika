import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Button, ListItem, Avatar, Card} from 'react-native-elements';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home1 = ({navigation}) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      const res = await AsyncStorage.getItem('user');
      if (!res) {
        navigation.navigate('Login');
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [data]);

  useEffect(() => {
    Axios.get('https://api.jsonbin.io/b/603e131481087a6a8b9456d1/1')
      .then((res) => {
        setData(res.data.Global);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!data || !loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <SafeAreaView>
      <Text>Coronavirus Live Update</Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <View style={{width: 135, height: 50}}>
          <Card>
            <Card.Title>Total</Card.Title>
            <Card.Divider />
            <Text style={{marginBottom: 10}}>{data?.TotalConfirmed}</Text>
            <Text style={styles.spanText}>+ {data?.NewConfirmed}</Text>
          </Card>
        </View>
        <View style={{width: 135, height: 50}}>
          <Card>
            <Card.Title>Recovered</Card.Title>
            <Card.Divider />
            <Text style={{marginBottom: 10}}>{data?.TotalRecovered}</Text>
            <Text style={styles.spanText}>+ {data?.NewRecovered}</Text>
          </Card>
        </View>
        <View style={{width: 135, height: 50}}>
          <Card>
            <Card.Title>Deaths</Card.Title>
            <Card.Divider />
            <Text style={{marginBottom: 10}}>{data?.TotalDeaths}</Text>
            <Text style={styles.spanText}>+ {data?.NewDeaths}</Text>
          </Card>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
    marginVertical: 30,
    marginBottom: 70,
    // paddingVertical: 20,
  },
  list: {
    paddingVertical: 20,
  },
  text: {
    fontSize: 42,
  },
  spanText: {
    fontSize: 10,
  },
});

export default Home1;
