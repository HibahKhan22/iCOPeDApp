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
  ImageBackground,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createAppContainer} from 'react-navigation';
import HomeButton from '../components/HomeButton';
import {SIZE} from '../utils/Dimentions';

Icon.loadFont();

const SettingsScreen = ({navigation}) => {
  const theme = useTheme();
  
  return (
    <SafeAreaView style={styles.container}>
    <View style={{flexDirection:'row', height:50,backgroundColor: '#e6f2f2'}}>
      <TouchableOpacity 
        style={{
           width: 50,
           paddingLeft: SIZE.padding *2,
           justifyContent: 'center'
               
// Variables for the parts of the interface from 30-37
               
         }}
        >

       <Fontisto name="player-settings" color='#43BFC7' size={24} />
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
          <Text style={{fontWeight: 'bold', color: '#43BFC7', fontSize: 18}}>Settings</Text>
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

   
    <ScrollView style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <View>
        <Text style={{marginTop:20,marginLeft:15, fontSize:18, textAlign:'left'}}>
         Account
        </Text>

// Overall styling and placement of features from 44-77

    </View>
      <View style={styles.cardsWrapper}>
        
        <View style={styles.card}>
         
          <View style={styles.cardInfo}>
          
            <Text style={styles.cardDetails}>
            Manage Accounts
            </Text>
            <AntDesign name='arrowright' color='#43BFC7' size={24 } />

            </View>
          

        </View>

      </View>
      <View style={styles.cardsWrapper2}>
        
        <View style={styles.card2}>
         
          <View style={styles.cardInfo}>
          
            <Text style={styles.cardDetails2}>
            Shared Data
            </Text>
            <AntDesign name='arrowright' color='#43BFC7' size={24 } />

            </View>
          

        </View>

      </View>

    <View>
        <Text style={{marginTop:20,marginLeft:15, fontSize:18, textAlign:'left',paddingTop:10}}>
         Advance Settings
        </Text>

    </View>
    <View style={styles.cardsWrapper}>
        
        <View style={styles.card}>
         
          <View style={styles.cardInfo}>
          
            <Text style=
          {{padding: 0, 
            paddingLeft:5,
            fontSize: 15,
            color: '#333',
            marginRight: 145}}>
            Lung Function Records
            </Text>
            <AntDesign name='arrowright' color='#43BFC7' size={24 } />

            </View>
          

        </View>

      </View>
    <View style={styles.cardsWrapper2}>
        
        <View style={styles.card2}>
         
          <View style={styles.cardInfo}>
          
          <Text style=
          {{padding: 0, 
            paddingLeft:5,
            fontSize: 15,
            color: '#333',
            marginRight: 185}}>
    Lifestyle Records</Text>
            <AntDesign name='arrowright' color='#43BFC7' size={24 } />

            </View>
          

        </View>

      </View>
    <View style={{
    width: '90%',
    alignSelf: 'center',
    paddingTop:10
  }}>
        
        <View style={styles.card2}>
         
          <View style={styles.cardInfo}>
          
          <Text style=
          {{padding: 0, 
            paddingLeft:5,
            fontSize: 15,
            color: '#333',
            marginRight: 95}}>
    “iCOPeD” Coach Management</Text>
            <AntDesign name='arrowright' color='#43BFC7' size={24 } />

            </View>
          

        </View>

      </View>
     
    <View>
        <Text style={{marginTop:20,marginLeft:15, fontSize:18, textAlign:'left',paddingTop:10}}>
         Others
        </Text>

    </View>
    <View style={styles.cardsWrapper}>
        
        <View style={styles.card}>
         
          <View style={styles.cardInfo}>
          
            <Text style=
          {{ 
            paddingLeft:5,
            fontSize: 15,
            color: '#333',
            marginRight: 150}}>
            Terms and Conditions
            </Text>
            <AntDesign name='arrowright' color='#43BFC7' size={24 } />

            </View>
          

        </View>

      </View>
    <View style={styles.cardsWrapper2}>
        
        <View style={styles.card2}>
         
          <View style={styles.cardInfo}>
          
          <Text style=
          {{padding: 0, 
            paddingLeft:5,
            fontSize: 15,
            color: '#333',
            marginRight: 205}}>
    Privacy Policy</Text>
            <AntDesign name='arrowright' color='#43BFC7' size={24 } />

            </View>
          

        </View>

      </View>
    
    </ScrollView>
    
    </SafeAreaView>
  );
};

// Several card formatting and text placement from 83-247

export default SettingsScreen;

// Remaining code is CSS for styling the general interface 

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
    width: '90%',
    alignSelf: 'center',
  },
  cardsWrapper2: {
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 80,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
   
  },
  card2: {
    height: 80,
    marginVertical: 0,
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
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: '#fff',
  },
  cardInfo2: {
    flexDirection: 'row',
    flex: 1,
    borderColor: '#ccc',
    paddingLeft:10,
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
    flex: 1,
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
    marginRight: 180
  },
  cardDetails2: {
    padding: 0,
    paddingLeft:5,
    fontSize: 15,
    color: '#333',
    marginRight: 218
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
