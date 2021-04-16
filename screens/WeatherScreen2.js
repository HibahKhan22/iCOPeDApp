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

const HomeScreen = ({navigation}) => {
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
          <Text style={{fontWeight: 'bold', color: '#43BFC7', fontSize: 18}}>Dashboard</Text>
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
    <View style={styles.sliderContainer}>
      <View style={styles.slide}>
            <ImageBackground
              source={require('../assets/banner/weather3.png')}
              resizeMode="cover"
              style={{ height: '100%',
              width: '100%',
              alignSelf: 'center',
              borderRadius: 8}}
            >
               <View style={{flexDirection:'column', alignItems:'center',justifyContent:'center',}}>
               <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row', marginTop:50, marginBottom:10}}>
               <Text style={{fontWeight: 'bold', color: 'white', fontSize: 28,backgroundColor:'#43BFC7',opacity:1}}>Welcome</Text>
               <Text style={{fontWeight: 'bold', color: 'white', fontSize: 28,backgroundColor:'#43BFC7',opacity:1}}>  Hibah Khan</Text>
              </View>

               <Text style={{fontWeight: 'bold', color: 'white', fontSize: 18,backgroundColor:'#43BFC7',opacity:1}}>{currentDate}</Text>
              </View>
            </ImageBackground>
            
       </View>
      </View>
    <ScrollView style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
     

      <View style={styles.cardsWrapper}>

        <View style={styles.card}>
        
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Weather</Text>
            
            <Text style={styles.cardDetails}>
            The overall weather condition
            for your COPD looks stable. 
            Why not take a walk? 
            </Text>

            <Text style={styles.cardDetailsLink}
              onPress={() => navigation.navigate('WeatherScreen2')}>
             Read more
            </Text>
          </View>

          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/banner/Weatherman.png')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
        </View>


        <View style={styles.card}>
        <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Reminders</Text>
            
            <Text style={styles.cardDetails}>
            You have an upcoming 
            dose of pulmnicort at 
            4:00 pm today!
            </Text>

            <Text style={styles.cardDetailsLink}
             onPress={() => navigation.navigate('RemindersScreen')}>
             Read more
            </Text>
          </View>

          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/banner/Waiting.png')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          </View>

      <View style={styles.card}>
        <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Contact your iCOPeD Coach</Text>
            
            <Text style={styles.cardDetails}>
            Communication with 
            your healthcare professional 
            is a button away!
            </Text>

            <HomeButton
            buttonTitle="Go to iCOPeD Coach"
            onPress={() => navigation.navigate('CoachScreen')}
            />
          </View>

          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/banner/Counseling.png')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
        </View>

      <View style={styles.card}>
        <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Contact your Doctor</Text>
            
            <Text style={styles.cardDetails}>
            Communication with 
            your personal doctor 
            is a button away!
            </Text>
            
            <HomeButton
            buttonTitle="Go to my Doctor"
            onPress={() => navigation.navigate('DoctorScreen')}
            />
           </View>

          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/banner/standing.png')}
              resizeMode="cover"
              style={styles.cardImg}
            />
           </View>
          </View>

      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

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
    height: 150,
    marginVertical: 10,
    flexDirection: 'row',
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
    flex: 2,
    padding: 5,
    borderColor: '#ccc',
    borderWidth: 0,
    borderLeftWidth: 0,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: '#fff',
  },
  cardTitle: {
    padding: 15,
    fontWeight: 'bold',
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