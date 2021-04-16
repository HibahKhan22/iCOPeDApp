import React, { useState } from 'react';
import { 
  TouchableOpacity, 
  View,
  StyleSheet, 
  Alert, 
  TouchableWithoutFeedback, 
  Keyboard, 
  SafeAreaView,
  Text,
  Image,
  StatusBar,
  ScrollView,
  Linking,
  ImageBackground,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '../store/actions/weatherActions';
import Form from '../components/Form';
import Weather from '../components/Weather';
import { SIZE } from '../utils/Dimentions';
import Ionicons from 'react-native-vector-icons/Ionicons';

const WeatherScreen = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { data, error } = useSelector(state => state.weather);

  const searchSubmitHandler = () => {
    if (search === '') {
      return Alert.alert('Validation', 'City name is required!', [{ text: 'OK' }]);
    }

    setLoading(true);
    dispatch(getWeather(search, () => setLoading(false), () => setLoading(false)));
    setSearch('');
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection:'row', height:50,backgroundColor: '#e6f2f2'}}>
      <TouchableOpacity 
        style={{
           width: 50,
           paddingLeft: SIZE.padding *2,
           justifyContent: 'center'

         }}
         onPress = {() => navigation.goBack()}
        >
         
       <Ionicons name='arrow-back-sharp' color='#43BFC7' size={30} />
      </TouchableOpacity>
      <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
        <View 
           style={{
             width: '70%',
             height: '100%',
             backgroundColor: '#e6f2f2',
             alignItems:'center',
             justifyContent:'center',
             borderRadius: 10
            }}
          >
          <Text style={{fontWeight: 'bold', color: '#43BFC7', fontSize: 18}}>Weather</Text>
        </View>

      </View>
      <TouchableOpacity
        style={{
           width: 50,
           paddingLeft: SIZE.padding *2,
           justifyContent: 'center'
         }}
        >

        </TouchableOpacity>
    </View>

    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Form search={search} onSetSearch={setSearch} onSubmit={searchSubmitHandler} />
        <ScrollView style={styles.containerInner}>
        <Weather loading={loading} data={data} error={error} />
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e6f2f2',
    flex: 1,
  },
});

export default WeatherScreen;