import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Button, navigation} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';


const WeatherData = ({ data }) => {
  const navigation = useNavigation(); 
  const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
  const celsius = (data.main.temp - 273.15).toFixed(2);

 

  return (
    <View style={styles.container} onStartShouldSetResponder={() => true}>
     
        <Text style={styles.title}>{data.name} - {data.sys.country}</Text>
        
        <View style={styles.cardInfo}>
          <Text style={styles.boxLabel}>{data.weather[0].description}</Text>
          <Image style={styles.image} source={{ uri: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png` }} />
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.boxLabel}>Temp</Text>
          <View style={styles.tempContainer}>
            <Text style={styles.boxText}>{fahrenheit}&#8457;</Text>
            <Text style={styles.boxText}>{celsius}&#8451;</Text>
          </View>
        </View>
        <View style={styles.cardInfo}>

           
           <Text style={styles.boxLabel}>Humidity</Text>
           <Text style={styles.boxText}>{data.main.humidity}%</Text>
           <View style ={{flexDirection:'row',marginBottom:5, alignItems:'center'}}>
           </View>
        
 
           
         </View>
         <View style={styles.cardInfo}>
          <Text style={styles.boxLabel}>Pressure</Text>
          <Text style={styles.boxText}>{data.main.pressure}hPa</Text>
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.boxLabel}>Wind</Text>
          <Text style={styles.boxText}>{data.wind.speed} m/s</Text>
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.boxLabel}>Air Quality information</Text>

          <Button
            title="More information"
            onPress={() => navigation.navigate('PollutionScreen')}
            />
        </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerInner: {
    paddingHorizontal: 20,
 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  box: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
  },
  boxLabel: {
    textTransform: 'uppercase',
    fontSize: 12,
    letterSpacing: 1,
    marginBottom: 5,
  },
  boxText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 50,
    height: 40,
    alignContent: 'center',
  },
  tempContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'stretch',
  },
  
  cardInfo: {
    flex: 0,
    padding: 5,
    borderColor: '#ccc',
    borderWidth: 0,
    borderLeftWidth: 0,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'center',
    width:'90%',
    alignSelf:'center',
    marginBottom:2,
    marginTop:2,
  },
  cardTitle: {
    padding: 15,
    fontWeight: 'bold',}

});

export default WeatherData;