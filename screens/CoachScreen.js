import React, {useState, useEffect} from 'react'
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
  Modal,
  Pressable
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

const CoachScreen = ({navigation}) => {
  const theme = useTheme();
  const [modalVisible, setModalVisible] = useState(false);



  
  return (
    <SafeAreaView style={styles.container}>
    <View style={{flexDirection:'row', height:50,backgroundColor: '#e6f2f2'}}>
    <TouchableOpacity 
        style={{
           width: 50,
           paddingLeft: SIZE.padding *2,
           justifyContent: 'center'

// Variables to define interface parts from 36-43                
               
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
          <Text style={{fontWeight: 'bold', color: '#43BFC7', fontSize: 18}}>My Coach</Text>
        </View>

//Styling of the font and arrows from 51-64

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
         Current Coach
        </Text>
        </View>
     
//Adjusted opacity and styling of text on the interface from 69-86

      <View style={{flexDirection:'column'}}>
      <TouchableOpacity onPress={() => navigation.navigate('CoachDetailScreen')}>
       <View style={styles.cardsWrapper}> 
 
        <View style={styles.card}>
        
          <View style={styles.cardInfo}>
           
          <View style={styles.sliderContainer}>
           <View style={{
             flex: 1,
             justifyContent: 'center',
            backgroundColor: 'transparent',
            sborderRadius: 8,
           width:'50%',
           marginHorizontal:'5%'
             }}>
         <Image
              source={require('../assets/banner/mycoach.png')}
              resizeMode="contain"
              style={styles.cardImg}
            />
        </View>
        <View style={{width:'60%',justifyContent: 'center'}}>
        <Text style={{fontSize:20}}>Iqbal Khan</Text>
      </View>
    </View>
        
//Enhancing backround color and placement of of general objects on the interface from 92-116
  
            
          </View>
          
      </View>


      </View>
      </TouchableOpacity>
       <View style={{flexDirection:'row'}}>
        <Text style={{marginTop:20,marginLeft:15, fontSize:18, textAlign:'center', width:'40%'}}>
        ________________
        </Text>
        <Text style={{marginTop:20,marginLeft:15, fontSize:18, textAlign:'center', width:'5%'}}>
        or 
        </Text>

        <Text style={{marginTop:20,marginLeft:15, fontSize:18, textAlign:'center', width:'40%'}}>
        ________________
        </Text>

        </View>
        
        <View>
       
        <Text style={{marginTop:20,marginLeft:15, fontSize:18, textAlign:'left'}}>
         Find a new Coach
        </Text>
        </View>
        <View style={styles.cardsWrapper}> 
        <View  style={styles.card}>
 
///Specific margin adjusting from 129-151
          
   <View style={styles.cardInfo}>
    
   <View style={styles.sliderContainer}>
    <View style={{
      flex: 1,
      justifyContent: 'center',
     backgroundColor: 'transparent',
     sborderRadius: 8,
    width:'50%',
    marginHorizontal:'5%'
      }}>
  <Image
       source={require('../assets/banner/mycoach2.png')}
       resizeMode="contain"
       style={styles.cardImg}
     />
 </View>
 <View style={{width:'60%',justifyContent: 'center'}}>
 <Text style={{fontSize:20}}>Jeanette Anderson</Text>
</View>
</View>
  

     
   </View>
   
</View>


</View>
       
        <View style={styles.cardsWrapper}> 
 
 <View style={styles.card}>
 
   <View style={styles.cardInfo}>
    
   <View style={styles.sliderContainer}>
    <View style={{
      flex: 1,
      justifyContent: 'center',
     backgroundColor: 'transparent',
     sborderRadius: 8,
    width:'50%',
    marginHorizontal:'5%'
      }}>
  <Image
       source={require('../assets/banner/mycoach1.png')}
       resizeMode="contain"
       style={styles.cardImg}
     />
 </View>
 <View style={{width:'60%',justifyContent: 'center'}}>
 <Text style={{fontSize:20}}>Ryan Philips</Text>
</View>
</View>
  

     
   </View>
   
</View>


</View>
        <View style={styles.cardsWrapper}> 
 
 <View style={styles.card}>
 
   <View style={styles.cardInfo}>
    
   <View style={styles.sliderContainer}>
    <View style={{
      flex: 1,
      justifyContent: 'center',
     backgroundColor: 'transparent',
     sborderRadius: 8,
    width:'50%',
    marginHorizontal:'5%'
      }}>
  <Image
       source={require('../assets/banner/mycoach3.png')}
       resizeMode="contain"
       style={styles.cardImg}
     />
 </View>
 <View style={{width:'60%',justifyContent: 'center'}}>
 <Text style={{fontSize:20}}>Ayesha Falaq</Text>
</View>
</View>
  
//Specific card contwnt and adjustment from 155-244
     
   </View>
   
</View>


</View>
      </View>


    
    </ScrollView>
  
    </SafeAreaView>
  );
};

export default CoachScreen;

//Remaining code consists of CSS styling of screens

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
    marginBottom:20
  },
  card: {
    height: 60,
    marginVertical: 20,
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
    borderBottomRightRadius: 40,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    backgroundColor: '#fff',
    alignSelf:'center',
    alignItems:'center'
  },
  cardTitle: {
    padding: 15,
    fontWeight: '400',
    textDecorationLine: 'underline',
    fontSize:18,
    alignItems:'center'
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

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0

  },
  modalView: {
    margin: 30,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
 
    
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
   
    
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    fontSize:25,
    marginBottom: 10,
  }
  
});
