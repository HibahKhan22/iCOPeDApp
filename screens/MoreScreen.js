import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Linking,
  ImageBackground,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createAppContainer} from 'react-navigation';
import HomeButton from '../components/HomeButton';
import {SIZE} from '../utils/Dimentions';
import AntDesign from 'react-native-vector-icons/AntDesign';

Icon.loadFont();

const  MoreScreen = ({navigation}) => {
  const theme = useTheme();
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      date + '/' + month + '/' + year 
      + ' ' + hours + ':' + min + ':' + sec
    );
  }, []);
  
  // This variables define the various time measurements in the interface from 30-36 

  return (
    <SafeAreaView style={styles.container}>
    <View style={{flexDirection:'row', height:50,backgroundColor: '#e6f2f2'}}>
      <TouchableOpacity 
        style={{
           width: 50,
           paddingLeft: SIZE.padding *2,
           justifyContent: 'center'

  // This variables define the various elements in the interface from 45-53      
               
         }}
        >
       <AntDesign name="pluscircle" color="#43BFC7" size={24} />
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
          <Text style={{fontWeight: 'bold', color: '#43BFC7', fontSize: 18}}>More</Text>
        </View>

      </View>
      <TouchableOpacity
        style={{
           width: 50,
           paddingLeft: SIZE.padding *2,
           justifyContent: 'center'
         }}
        >
          
// Overall text and margin formatting from 58-79
          
        </TouchableOpacity>
    </View>
   <ScrollView style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
     

    <View style={styles.cardsWrapper}>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        
      <TouchableOpacity onPress={() => navigation.navigate('Weather')}>
        <View style={styles.card}>
        
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Weather</Text>
            <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/banner/weather2.png')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
            
          </View>
       
        </View>
      </TouchableOpacity>
    
    

        <View style={styles.card}>
        
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>Educational</Text>
          <View style={styles.cardImgWrapper}>
          <Image
            source={require('../assets/banner/teach.png')}
            resizeMode="cover"
            style={styles.cardImg}
          />
        </View>
          
        </View>
      </View>
     
      </View>

      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <View style={styles.card}>
        
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>AI Assistance</Text>
          <View style={styles.cardImgWrapper}>
          <Image
            source={require('../assets/banner/ai.png')}
            resizeMode="cover"
            style={styles.cardImg}
          />
        </View>
          
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('RiskCalculatorScreen')}>
      <View style={styles.card}>
        
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>Risk Calculator</Text>
          <View style={styles.cardImgWrapper}>
          <Image
            source={require('../assets/banner/risk.png')}
            resizeMode="cover"
            style={styles.cardImg}
          />
        </View>
          
        </View>
      </View>
      </TouchableOpacity>
    </View>
     
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <View style={styles.card}>
        
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>Medication Storage</Text>
          <View style={styles.cardImgWrapper}>
          <Image
            source={require('../assets/banner/medic.png')}
            resizeMode="cover"
            style={styles.cardImg}
          />
        </View>
          
        </View>
      </View>
      <View style={styles.card}>
        
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>Weekly Quiz</Text>
          <View style={styles.cardImgWrapper}>
          <Image
            source={require('../assets/banner/quiz.png')}
            resizeMode="cover"
            style={styles.cardImg}
          />
        </View>
          
        </View>
      </View>

    </View>
    
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <TouchableOpacity onPress={() => navigation.navigate('DietScreen')}>
      <View style={styles.card}>
        
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>Diet Database</Text>
          <View style={styles.cardImgWrapper}>
          <Image
            source={require('../assets/banner/diet2.png')}
            resizeMode="cover"
            style={styles.cardImg}
          />
        </View>
          
        </View>
      </View>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('NewsScreen')}>
      <View style={styles.card}>
        
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>Health News</Text>
          <View style={styles.cardImgWrapper}>
          <View style={{alignSelf:'center', alignContent:'center', justifyContent:'center'}}>
          <Ionicons name="ios-newspaper-outline" color="#43BFC7" size={60} />
          </View>
        </View>

// Overall card formats and elements on them in the interphase from 85-222

        </View>
         
      </View>
      </TouchableOpacity>
    </View>
    
    
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default MoreScreen;

//The rest of the code refers to CSS styling of screens

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f2f2',
  },
  sliderContainer: {
    height: 180,
    width: '100%',
    marginTop: 0,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#fdeae7' /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#de4f35',
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 130,
    width:170,
    marginVertical: 10,
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,

  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 0,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 10,
    backgroundColor: '#fff',
  },
  cardInfo: {
    flex: 1,
    padding: 5,
    borderColor: '#ccc',
    borderWidth: 0,
    borderLeftWidth: 0,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: '#fff',
  },
  cardTitle: {
    padding: 12,
    fontWeight: 'bold',
    textAlign:'center'
  },
  cardDetails: {
    padding: 0,
    paddingLeft:15,
    fontSize: 12,
    color: '#444',
  },

  cardDetailsLink: {
    padding: 0,
    paddingLeft:15,
    paddingTop:15,
    fontSize: 12,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: '100%',
    backgroundColor: '#87ceeb',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Lato',
  },
  
});
