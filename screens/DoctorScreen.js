import React from 'react';
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
  Button,
  ImageBackground,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {createAppContainer} from 'react-navigation';
import HomeButton from '../components/HomeButton';
import {SIZE} from '../utils/Dimentions';
import AntDesign from 'react-native-vector-icons/AntDesign';

Icon.loadFont();

const DoctorScreen = ({navigation}) => {
  const theme = useTheme();
  
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
     
//Varibales to define the interpface from 31-38
          
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
          <Text style={{fontWeight: 'bold', color: '#43BFC7', fontSize: 18}}>My Doctor</Text>
        </View>

//Styling of upper header and black arrow on interface from 46-57

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
      <View style={{
       flex: 1,
       justifyContent: 'center',
       backgroundColor: 'transparent',
       sborderRadius: 8,
       width:'100%',
       marginHorizontal:'5%'
       }}>
       <FontAwesome name='circle' color='#43BFC7' size={100} /> 
       </View>
       <View style={{width:'60%',justifyContent: 'center'}}>
        <Text style={{fontSize:20}}>Annie Jacobs</Text>
      </View>
    </View>
      
    <ScrollView style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
     
//The opacity and color of the interface and txt, along with margins are mentioned from 65-88
        
      <View style={styles.cardsWrapper}>

        <View style={styles.card}>
        
          <View style={styles.cardInfo}>
           
       

            <Text style={styles.cardTitle}>Doctor Contact</Text>
             
             <View style ={{flexDirection:'row',marginBottom:5}}>
             <Text style={styles.cardDetails}>Doctor Name:</Text>
             <Text style={styles.cardDetails2}> Annie Jacobs, MD</Text>
             </View>
             <View style ={{flexDirection:'row',marginBottom:5}}>
             <Text style={styles.cardDetails}>Email:</Text>
             <Text style={styles.cardDetails3} onPress={() => Linking.openURL('mailto:ajacobs@gmail.com?subject=SendMail&body=Description') }>
              ajacobs@gmail.com</Text>
             </View>
             <View style ={{flexDirection:'row',marginBottom:5}}>
            <Text style={styles.cardDetails}>Phone Number:</Text>
            <Text style={styles.cardDetails3} onPress={() => Linking.openURL('tel:119')} >119
            </Text>
            </View>
            <View style ={{flexDirection:'row',marginBottom:5}}>
            <Text style={styles.cardDetails}>Availability:</Text>
            <Text style={styles.cardDetails2}>  Mon-Wed, 8am - 5pm</Text>
            </View>
            
          </View>
      
      </View>

// Each of the separate cards and the features and text appearing on them from 97-123

      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default DoctorScreen;

//The rest of the code refers to CSS styling of screens

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f2f2',
  },
  sliderContainer: {
    height: 100,
    width: '100%',
    marginTop: 0,
    borderRadius: 0,
    flexDirection:'row'
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
    height: '100%',
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
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: '#fff',
  },
  cardTitle: {
    padding: 15,
    fontWeight: '400',
    textDecorationLine: 'underline',
    fontSize:18
  },
  cardDetails: {
    padding: 0,
    paddingLeft:15,
    fontSize: 14,
    color: 'black',
  },
  cardDetails2:{
    textAlign:'left', 
    fontSize: 14,
    color: '#777'
  },

  cardDetails3:{
    textAlign:'left', 
    fontSize: 15,
    color: '#4287f5',
    fontWeight:'bold'

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
