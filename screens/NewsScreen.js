import React from 'react';
import {getNews} from '../api/News';
import { Image,Linking,TouchableOpacity,StyleSheet, Text, View, ActivityIndicator, Alert, ScrollView, Button, FlatList,route,navigation, SafeAreaView} from 'react-native';
import { Component } from 'react';
import {useTheme} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {onchangelatlon} from '../components/WeatherData';
import WeatherData from '../components/WeatherData';
import { useDispatch, useSelector } from 'react-redux';
import {connect} from 'react-redux';
import { useNavigationParam} from 'react-navigation';
import {weatherActions} from '../store/actions/weatherActions';
import { SIZE } from '../utils/Dimentions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import store from '../store';
import { createIconSetFromFontello } from 'react-native-vector-icons';

export default class NewsScreen extends Component {
 
 constructor(props){
     super(props);
     this.state = {
         isLoading: true,
         data: [],
     }
 }
 


componentDidMount (){

 
   

    getNews().then(data =>{
        this.setState({
        isLoading: false,
        data: data
        });

     }, error => {
        Alert.alert('Error', 'Error!');
     }
     
     )


 }
 
 render(){
 
 console.log("hello",this.state);
  // show waiting screen when json data is fetching
  if(this.state.isLoading) {
    return(
      
      <View style={styles.container}>
        <ActivityIndicator/>
      </View>
     
    )
  }else{
      const image= this.state.data.articles[0].urlToImage;

return(
    <SafeAreaView style={styles.container}>
     <View style={{flexDirection:'row', height:50,backgroundColor: '#e6f2f2'}}>
      <TouchableOpacity 
        style={{
           width: 50,
           paddingLeft: SIZE.padding *2,
           justifyContent: 'center'

         }}
         onPress = {() => this.props.navigation.goBack()}
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
          <Text style={{fontWeight: 'bold', color: '#43BFC7', fontSize: 18}}>Health News</Text>
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
   
     <View style={styles.container}>
   
     
     <Text style={styles.cardTitle}>Articles</Text>

     <ScrollView>
     <View style={styles.cardInfo}>
  
    
     <View style ={{flexDirection:'row',marginBottom:5}}>
        <Text style={styles.cardDetails}>Author: </Text>
        <Text style={styles.cardDetails2}> {this.state.data.articles[0].author}</Text>
     </View>
     <View style ={{flexDirection:'row',marginBottom:5}}>
        <Text style={styles.cardDetails}>Tittle: </Text>
        <Text style={styles.cardDetails2}> {this.state.data.articles[0].title}</Text>
     </View>
     <View style ={{flexDirection:'row',marginBottom:5}}>
        <Text style={styles.cardDetails}>description: </Text>
        <Text style={styles.cardDetails2}> {this.state.data.articles[0].description}</Text>
     </View>
     <View style ={{flexDirection:'row',marginBottom:5}}>
        <Text style={styles.cardDetails}>Link: </Text>
        <Text style={styles.cardDetails3}  onPress={() => Linking.openURL(this.state.data.articles[0].url)}> {this.state.data.articles[0].url}</Text>

     </View> 
     <Image
          source={{uri:this.state.data.articles[0].urlToImage}}
          style={{ width: 100, height: 100, alignSelf:'center'}}
        />
        
     </View>

     
     <View style={styles.cardInfo}>
    
     <View style ={{flexDirection:'row',marginBottom:5}}>
        <Text style={styles.cardDetails}>Author: </Text>
        <Text style={styles.cardDetails2}> {this.state.data.articles[1].author}</Text>
     </View>
     <View style ={{flexDirection:'row',marginBottom:5}}>
        <Text style={styles.cardDetails}>Tittle: </Text>
        <Text style={styles.cardDetails2}> {this.state.data.articles[1].title}</Text>
     </View>
     <View style ={{flexDirection:'row',marginBottom:5}}>
        <Text style={styles.cardDetails}>description: </Text>
        <Text style={styles.cardDetails2}> {this.state.data.articles[1].description}</Text>
     </View>
     <View style ={{flexDirection:'row',marginBottom:5}}>
        <Text style={styles.cardDetails}>Link: </Text>
        <Text style={styles.cardDetails3}  onPress={() => Linking.openURL(this.state.data.articles[1].url)}> {this.state.data.articles[1].url}</Text>
     </View>
     <Image
          source={{uri:this.state.data.articles[1].urlToImage}}
          style={{ width: 100, height: 100, alignSelf:'center'}}
        />
     </View>

     <View style={styles.cardInfo}>
    
    <View style ={{flexDirection:'row',marginBottom:5}}>
       <Text style={styles.cardDetails}>Author: </Text>
       <Text style={styles.cardDetails2}> {this.state.data.articles[2].author}</Text>
    </View>
    <View style ={{flexDirection:'row',marginBottom:5}}>
       <Text style={styles.cardDetails}>Tittle: </Text>
       <Text style={styles.cardDetails2}> {this.state.data.articles[2].title}</Text>
    </View>
    <View style ={{flexDirection:'row',marginBottom:5}}>
       <Text style={styles.cardDetails}>description: </Text>
       <Text style={styles.cardDetails2}> {this.state.data.articles[2].description}</Text>
    </View>
    <View style ={{flexDirection:'row',marginBottom:5}}>
       <Text style={styles.cardDetails}>Link: </Text>
       <Text style={styles.cardDetails3}  onPress={() => Linking.openURL(this.state.data.articles[2].url)}> {this.state.data.articles[2].url}</Text>
    </View>
    <Image
          source={{uri:this.state.data.articles[2].urlToImage}}
          style={{ width: 100, height: 100, alignSelf:'center',}}
        />
    </View>

    <View style={styles.cardInfo}>
    
    <View style ={{flexDirection:'row',marginBottom:5}}>
       <Text style={styles.cardDetails}>Author: </Text>
       <Text style={styles.cardDetails2}> {this.state.data.articles[3].author}</Text>
    </View>
    <View style ={{flexDirection:'row',marginBottom:5}}>
       <Text style={styles.cardDetails}>Tittle: </Text>
       <Text style={styles.cardDetails2}> {this.state.data.articles[3].title}</Text>
    </View>
    <View style ={{flexDirection:'row',marginBottom:5}}>
       <Text style={styles.cardDetails}>description: </Text>
       <Text style={styles.cardDetails2}> {this.state.data.articles[3].description}</Text>
    </View>
    <View style ={{flexDirection:'row',marginBottom:5}}>
       <Text style={styles.cardDetails}>Link: </Text>
       <Text style={styles.cardDetails3}  onPress={() => Linking.openURL(this.state.data.articles[3].url)}> {this.state.data.articles[3].url}</Text>
    </View>
    <Image
          source={{uri:this.state.data.articles[3].urlToImage}}
          style={{ width: 100, height: 100, alignSelf:'center',}}
        />
    </View>

    <View style={styles.cardInfo}>
    
    <View style ={{flexDirection:'row',marginBottom:5}}>
       <Text style={styles.cardDetails}>Author: </Text>
       <Text style={styles.cardDetails2}> {this.state.data.articles[4].author}</Text>
    </View>
    <View style ={{flexDirection:'row',marginBottom:5}}>
       <Text style={styles.cardDetails}>Tittle: </Text>
       <Text style={styles.cardDetails2}> {this.state.data.articles[4].title}</Text>
    </View>
    <View style ={{flexDirection:'row',marginBottom:5}}>
       <Text style={styles.cardDetails}>description: </Text>
       <Text style={styles.cardDetails2}> {this.state.data.articles[4].description}</Text>
    </View>
    <View style ={{flexDirection:'row',marginBottom:5}}>
       <Text style={styles.cardDetails}>Link: </Text>
       <Text style={styles.cardDetails3}  onPress={() => Linking.openURL(this.state.data.articles[4].url)}> {this.state.data.articles[4].url}</Text>
    </View>
    <Image
          source={{uri:this.state.data.articles[4].urlToImage}}
          style={{ width: 100, height: 100, alignSelf:'center',}}
        />
    </View>
    

    <View style={styles.cardInfo}>
    
    <View style ={{flexDirection:'row',marginBottom:5}}>
       <Text style={styles.cardDetails}>Author: </Text>
       <Text style={styles.cardDetails2}> {this.state.data.articles[5].author}</Text>
    </View>
    <View style ={{flexDirection:'row',marginBottom:5}}>
       <Text style={styles.cardDetails}>Tittle: </Text>
       <Text style={styles.cardDetails2}> {this.state.data.articles[5].title}</Text>
    </View>
    <View style ={{flexDirection:'row',marginBottom:5}}>
       <Text style={styles.cardDetails}>description: </Text>
       <Text style={styles.cardDetails2}> {this.state.data.articles[5].description}</Text>
    </View>
    <View style ={{flexDirection:'row',marginBottom:5}}>
       <Text style={styles.cardDetails}>Link: </Text>
       <Text style={styles.cardDetails3}  onPress={() => Linking.openURL(this.state.data.articles[5].url)}> {this.state.data.articles[5].url}</Text>
    </View>
    <Image
          source={{uri:this.state.data.articles[5].urlToImage}}
          style={{ width: 100, height: 100, alignSelf:'center',}}
        />
    </View>

    <View style={styles.cardInfo}>
    
    <View style ={{flexDirection:'row',marginBottom:5}}>
       <Text style={styles.cardDetails}>Author: </Text>
       <Text style={styles.cardDetails2}> {this.state.data.articles[6].author}</Text>
    </View>
    <View style ={{flexDirection:'row',marginBottom:5}}>
       <Text style={styles.cardDetails}>Tittle: </Text>
       <Text style={styles.cardDetails2}> {this.state.data.articles[6].title}</Text>
    </View>
    <View style ={{flexDirection:'row',marginBottom:5}}>
       <Text style={styles.cardDetails}>description: </Text>
       <Text style={styles.cardDetails2}> {this.state.data.articles[6].description}</Text>
    </View>
    <View style ={{flexDirection:'row',marginBottom:5}}>
       <Text style={styles.cardDetails}>Link: </Text>
       <Text style={styles.cardDetails3}  onPress={() => Linking.openURL(this.state.data.articles[6].url)}> {this.state.data.articles[6].url}</Text>
    </View>
    <Image
          source={{uri:this.state.data.articles[6].urlToImage}}
          style={{ width: 100, height: 100, alignSelf:'center',}}
        />
    </View>

    <View style={styles.cardInfo}>
    
    <View style ={{flexDirection:'row',marginBottom:5}}>
       <Text style={styles.cardDetails}>Author: </Text>
       <Text style={styles.cardDetails2}> {this.state.data.articles[7].author}</Text>
    </View>
    <View style ={{flexDirection:'row',marginBottom:5}}>
       <Text style={styles.cardDetails}>Tittle: </Text>
       <Text style={styles.cardDetails2}> {this.state.data.articles[7].title}</Text>
    </View>
    <View style ={{flexDirection:'row',marginBottom:5}}>
       <Text style={styles.cardDetails}>description: </Text>
       <Text style={styles.cardDetails2}> {this.state.data.articles[7].description}</Text>
    </View>
    <View style ={{flexDirection:'row',marginBottom:5}}>
       <Text style={styles.cardDetails}>Link: </Text>
       <Text style={styles.cardDetails3}  onPress={() => Linking.openURL(this.state.data.articles[7].url)}> {this.state.data.articles[7].url}</Text>
    </View>
    <Image
          source={{uri:this.state.data.articles[7].urlToImage}}
          style={{ width: 100, height: 100, alignSelf:'center',}}
        />
    </View>

     </ScrollView>
      
    </View>
   </SafeAreaView>
 
);
}
 }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e6f2f2',
   
      
    },
    cardDetails: {
        padding: 0,
        paddingLeft:15,
        fontSize: 14,
        color: 'black',
        width:'30%'
      },
      cardDetails2:{
        textAlign:'left', 
        fontSize: 14,
        color: '#777',
        width:'70%'
      },

      cardDetails3:{
        textAlign:'left', 
        fontSize: 14,
        color: 'blue',
        width:'70%'
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
        width:'90%',
        alignSelf:'center',
        marginBottom:10,
        marginTop:5,
        shadowColor: '#999',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      cardTitle: {
        padding: 20,
        fontWeight: '400',
        fontSize:18
      },
  });