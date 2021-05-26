import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Linking,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createAppContainer} from 'react-navigation';
import HomeButton from '../components/HomeButton';
import { SIZE } from '../utils/Dimentions';

const RemindersScreen= ({navigation}) => {
  const theme = useTheme();

  
  return (
    <SafeAreaView style={styles.container}>
    <View style={{flexDirection:'row', height:50,backgroundColor: '#e6f2f2'}}>
      <TouchableOpacity 
        style={{
           width: 50,
           paddingLeft: SIZE.padding *2,
           justifyContent: 'center'
               
// variables for the interface parts from 27 to 34
               
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
          <Text style={{fontWeight: 'bold', color: '#43BFC7', fontSize: 18}}>Reminders</Text>
        </View>

      </View>
      <TouchableOpacity
        style={{
           width: 50,
           paddingLeft: SIZE.padding *2,
           justifyContent: 'center'
         }}
        >
          
// General formatting ofthe inteface from 39-63
          
        </TouchableOpacity>
    </View>
    <ScrollView style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
     

      <View style={styles.cardsWrapper}>
      <TouchableOpacity onPress={() => navigation.navigate('MedicationReminderScreen')}>
        <View style={styles.card}  >
        
          <View style={styles.cardInfo}>

            <Text style={styles.cardTitle}>Medication</Text>
        
          </View>

          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/banner/medication.png')}
              resizeMode="cover"
              style={styles.cardImg} 
            />
          </View>

        </View>
      </TouchableOpacity>
       
      <TouchableOpacity onPress={() => navigation.navigate('ExerciseReminderScreen')}>
        <View style={styles.card}>
        <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Exercise</Text>
            
      
          </View>

          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/banner/exercise.png')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          </View>
      </TouchableOpacity>
       
      <TouchableOpacity onPress={() => navigation.navigate('DietReminderScreen')}>
        <View style={styles.card}>
        <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Diet</Text>
            
         

           
          </View>

          

          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/banner/diet.png')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          </View>
      </TouchableOpacity>
  
//Styling of cards and the text that goes respectively from 75-134

      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default RemindersScreen;

// Rest of the code refers to the CSS styling 

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
    marginTop: 15,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 200,
    marginVertical: 10,
    flexDirection: 'column',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 2,

  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 0,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: '#fff',
  },
  cardInfo: {
    flex: 1,
    padding: 2,
    borderColor: '#ccc',
    borderWidth: 0,
    borderLeftWidth: 0,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 0,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'center'
  },
  cardTitle: {
    padding: 15,
    fontWeight: 'bold'

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
