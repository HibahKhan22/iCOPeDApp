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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createAppContainer} from 'react-navigation';
import HomeButton from '../components/HomeButton';
import { SIZE } from '../utils/Dimentions';

const ExerciseReminderScreen = ({navigation}) => {
  const theme = useTheme();

  
  return (
    <SafeAreaView style={styles.container}>
    <View style={{flexDirection:'row', height:50,backgroundColor: '#e6f2f2'}}>
      <TouchableOpacity 
        style={{
           width: 50,
           paddingLeft: SIZE.padding *2,
           justifyContent: 'center'

// Variables to define elements in the interface from 29-36               
               
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
          <Text style={{fontWeight: 'bold', color: '#43BFC7', fontSize: 18}}>Exercise</Text>
        </View>

      </View>
      <TouchableOpacity
        style={{
           width: 50,
           paddingLeft: SIZE.padding *2,
           justifyContent: 'center'
         }}
        >
          
//Setting of opacity, colors and text of upper part of the interface from 44-58
          
        </TouchableOpacity>
    </View>
    <ScrollView style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
     
       <View>
        <Text style={{margin:20, fontSize:18}}>

          Upcoming
        </Text>

       </View>
      <View style={styles.cardsWrapper}>
        
        <View style={styles.card}>
        
          <View style={styles.cardInfo}>
          <FontAwesome name='circle' color='#43BFC7' size={15} />
            <Text style={styles.cardDetails}>
            Complete 30 minutes of low-intensity activity 
            </Text>
            </View>
          <View style={styles.cardInfo2}>
            <Text style={styles.cardDetails2}>
            Today, 02/22/2021 at 4:00 pm
            Repeat daily
            </Text>
            <Text style={styles.cardDetailsLink}>
             Edit
            </Text>
          </View>

        </View>

// Setting of overall color and the elements within the cards on the interface from 73-99

        <View style={styles.cardInfo3}>
      <AntDesign name='pluscircle' color='#43BFC7' size={50} />
    
        
      </View>

      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default ExerciseReminderScreen;

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
    marginTop: 15,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 150,
    marginVertical: 10,
    flexDirection: 'column',
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
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: '#fff',
  },
  cardInfo: {
    flexDirection: 'row',
    flex: 1,
    borderColor: '#ccc',
    paddingLeft:10,
    paddingTop:30,
    borderWidth: 0,
    borderLeftWidth: 0,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 0,
    backgroundColor: '#fff',
  },
  cardInfo2: {
    flexDirection: 'row',
    flex: 2,
    borderColor: '#ccc',
    paddingLeft:20,
    borderWidth: 0,
    borderLeftWidth: 0,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 10,
    backgroundColor: '#fff',
  },
  cardInfo3: {
    flexDirection: 'row',
    flex: 2,
    borderColor: '#ccc',
    paddingLeft:20,
    borderWidth: 0,
    paddingVertical:350,
    borderLeftWidth: 0,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  
  },
  cardTitle: {
    padding: 15,
    fontWeight: 'bold'

  },
  cardDetails: {
    padding: 0,
    paddingLeft:5,
    fontSize: 15,
    color: '#333',
  },
  cardDetails2: {
    padding: 0,
    paddingLeft:5,
    fontSize: 12,
    color: '#666',
  },

  cardDetailsLink: {
    padding: 0,
    paddingLeft:15,
    paddingTop:15,
    fontSize: 15,
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
