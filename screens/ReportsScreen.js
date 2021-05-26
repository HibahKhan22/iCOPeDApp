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

const  ReportsScreen= ({navigation}) => {
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
               
// Variables used for the parts of the interface from 36-43
               
         }}
        >
        <Ionicons name="document" color='#43BFC7' size={24} />
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
          <Text style={{fontWeight: 'bold', color: '#43BFC7', fontSize: 18}}>Reports</Text>
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
  
       <View style={{width:'100%',justifyContent: 'center', alignItems:'center'}}>
        <Text style={{fontSize:20}}>February 7 - February 14, 2021</Text>
      </View>
    </View>

    // Overall formatting for the whole interphase from 49-80

    <ScrollView style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
     
     <View style={{flexDirection:'column'}}>
       <View style={styles.cardsWrapper}> 

        <View style={styles.card}>
        
          <View style={styles.cardInfo}>
           
            <Text style={styles.cardTitle}>Medication Adherence</Text>
            <View style ={{flexDirection:'row',marginBottom:5, alignItems:'center'}}>
            <View style={{paddingLeft:5, paddingRight:5}}>
            <AntDesign name='checkcircle' color='#43BFC7' size={23} />
            </View>
            <View style={{paddingLeft:5, paddingRight:5}}>
            <AntDesign name='checkcircle' color='#43BFC7' size={23} />
            </View>
            <View style={{paddingLeft:5, paddingRight:5}}>
            <AntDesign name='checkcircle' color='#43BFC7' size={23} />
            </View>
            <View style={{paddingLeft:5, paddingRight:5}}>
            <AntDesign name='checkcircle' color='#43BFC7' size={23} />
            </View>
            <View style={{paddingLeft:5, paddingRight:5}}>
            <AntDesign name='closecircle' color='red' size={23} />
            </View>
            <View style={{paddingLeft:5, paddingRight:5}}>
            <AntDesign name='checkcircle' color='#43BFC7' size={23} />
            </View>
            <View style={{paddingLeft:5, paddingRight:5}}>
            <AntDesign name='checkcircle' color='#43BFC7' size={23} />
            </View>
           
            </View>
         
  
            
          </View>
          
      </View>


      </View>
       <View style={styles.cardsWrapper}>

         <View style={styles.card}>

  <View style={styles.cardInfo}>
   
    <Text style={styles.cardTitle}>Problem Symptoms</Text>
    <View style ={{flexDirection:'row',marginBottom:5, alignItems:'center'}}>
    <View style={{paddingLeft:5, paddingRight:5}}>
    <Text style={{fontSize:15}}>Coughing, Breathlessness</Text>
    </View>
    
   
    </View>
 

    
  </View>
  
</View>


       </View>
       <View style={styles.cardsWrapper}>

         <View style={styles.card}>

  <View style={styles.cardInfo}>
   
    <Text style={styles.cardTitle}>Exercise</Text>
    <View style ={{flexDirection:'row',marginBottom:5, alignItems:'center'}}>
    <View style={{paddingLeft:5, paddingRight:5}}>
    <AntDesign name='checkcircle' color='#43BFC7' size={23} />
    </View>
    <View style={{paddingLeft:5, paddingRight:5}}>
    <AntDesign name='checkcircle' color='#43BFC7' size={23} />
    </View>
    <View style={{paddingLeft:5, paddingRight:5}}>
    <AntDesign name='checkcircle' color='#43BFC7' size={23} />
    </View>
    <View style={{paddingLeft:5, paddingRight:5}}>
    <AntDesign name='checkcircle' color='#43BFC7' size={23} />
    </View>
    <View style={{paddingLeft:5, paddingRight:5}}>
    <AntDesign name='checkcircle' color='#43BFC7' size={23} />
    </View>
    <View style={{paddingLeft:5, paddingRight:5}}>
    <AntDesign name='checkcircle' color='#43BFC7' size={23} />
    </View>
    <View style={{paddingLeft:5, paddingRight:5}}>
    <AntDesign name='checkcircle' color='#43BFC7' size={23} />
    </View>
   
    </View>
 

    
  </View>
  
</View>


       </View>
       <View style={styles.cardsWrapper}>

         <View style={styles.card}>

  <View style={styles.cardInfo}>
   
    <Text style={styles.cardTitle}>Environment</Text>
    <View style ={{flexDirection:'row',marginBottom:5, alignItems:'center'}}>
    <View style={{paddingLeft:5, paddingRight:5}}>
    <AntDesign name='closecircle' color='red' size={23} />
    </View>
    <View style={{paddingLeft:5, paddingRight:5}}>
    <AntDesign name='checkcircle' color='#43BFC7' size={23} />
    </View>
    <View style={{paddingLeft:5, paddingRight:5}}>
    <AntDesign name='checkcircle' color='#43BFC7' size={23} />
    </View>
    <View style={{paddingLeft:5, paddingRight:5}}>
    <AntDesign name='checkcircle' color='#43BFC7' size={23} />
    </View>
    <View style={{paddingLeft:5, paddingRight:5}}>
    <AntDesign name='checkcircle' color='#43BFC7' size={23} />
    </View>
    <View style={{paddingLeft:5, paddingRight:5}}>
    <AntDesign name='checkcircle' color='#43BFC7' size={23} />
    </View>
    <View style={{paddingLeft:5, paddingRight:5}}>
    <AntDesign name='checkcircle' color='#43BFC7' size={23} />
    </View>
   
    </View>
 

    
  </View>
  
</View>

// All card formatting and text information on interface from 85-230

       </View>
      
      </View>

      <View style={{alignSelf:'center', width:'50%', alignItems:'center'}}>
      <HomeButton
            buttonTitle="Send Report"
            onPress={() => setModalVisible(true)}/>
     </View>
    
    </ScrollView>
    <Modal
         animationType="fade"
         transparent={true}
         visible={modalVisible}
         onRequestClose={() => {
         Alert.alert("Modal has been closed.");
         setModalVisible(!modalVisible);
        }}
      >
        <View style={{flex:1,backgroundColor:'#000000AA',justifyContent:'flex-end'}}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{flexDirection:'row', alignContent:'center',justifyContent:'center'}}>
            <Text style={styles.modalText}>Send report to...</Text>
             <TouchableOpacity style={{alignContent:'flex-end'}} onPress={() => setModalVisible(!modalVisible)}
              >
            <AntDesign name="closecircleo" color='black' size={24} />
            </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
        
             <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
              
            ><Text style={styles.textStyle}>Doctor</Text>
              </Pressable>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>iCOPeD Coach</Text>
            </Pressable>
            </View>
          </View>
        </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

// All button abilities and styling from 236-282

export default ReportsScreen;

// Remaining code is for CSS styling of the screens

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
    height: 50,
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
