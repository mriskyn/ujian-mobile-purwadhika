import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, FlatList, ScrollView} from 'react-native';
import {ListItem} from 'react-native-elements';
import axios from 'axios';

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get('https://api.jsonbin.io/b/603e131481087a6a8b9456d1/1')
      .then((res) => {
        const result = res.data.Countries;
        setCountries(result);
        setLoading(true);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const convertSentence = (sentence) => {
    if (sentence.length > 7) {
      return sentence.slice(0, 7) + '...';
    }
    return sentence;
  };

  if (!countries || !loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <Text>Live Update</Text>
      <View>
        <ScrollView>
          <ListItem>
            <Text>Region</Text>
            <Text>New Cases</Text>
            <Text>Total Cases</Text>
            <Text>Recovered</Text>
            <Text>Deaths</Text>
          </ListItem>
          {countries.map((el, i) => (
            <ListItem key={i} bottomDivider>
              <Text>{convertSentence(el.Country)}</Text>
              <Text>{el.NewConfirmed}</Text>
              <Text>{el.TotalConfirmed}</Text>
              <Text>{el.TotalRecovered}</Text>
              <Text>{el.TotalDeaths}</Text>
            </ListItem>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Country;
