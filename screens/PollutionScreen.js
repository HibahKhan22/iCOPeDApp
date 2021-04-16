import React from 'react';
import {getPollution} from '../api/Pollution';
import { TouchableOpacity,StyleSheet, Text, View, ActivityIndicator, Alert, ScrollView, Button, FlatList,route,navigation, SafeAreaView} from 'react-native';
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

class PollutionScreen extends Component {
 
 constructor(props){
     super(props);
     this.state = {
         isLoading: true,
         data: [],
     }
 }
 


componentDidMount (){

 
   

    getPollution().then(data =>{
        this.setState({
        isLoading: false,
        data: data.list
        });

     }, error => {
        Alert.alert('Error', 'Error!');
     }
     
     )


 }
 
 render(){
  const state = store.getState();
  const city = state.weather.data.name;
  const country = state.weather.data.sys.country;
  // show waiting screen when json data is fetching
  if(this.state.isLoading) {
    return(
      
      <View style={{flex: 1, padding: 20}}>
        <ActivityIndicator/>
      </View>
     
    )
  }

   
  return(
    
<View style={styles.container} onStartShouldSetResponder={() => true}>    
      <FlatList
        data={this.state.data}
        renderItem={({item}) => {
          return (
            <SafeAreaView>

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
          <Text style={{fontWeight: 'bold', color: '#43BFC7', fontSize: 18}}>Air Quality Information</Text>
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
            
            <View style={styles.containerInner}>
            <Text style={styles.title}>{city} - {country}</Text>
            <Text style={{margin:10,alignSelf:'center',fontWeight: 'bold', color: 'black', fontSize: 18}}>Air Quality Index </Text>
            <View style={styles.cardInfo}>
            
                <Text style={styles.boxLabel}> Where 1 = Good, 2 = Fair, 3 = Moderate, 4 = Poor, 5 = Very Poor. </Text>
                <Text style={styles.boxText}>{item.main.aqi} </Text>
              </View>
              <Text style={{margin:10,alignSelf:'center',fontWeight: 'bold', color: 'black', fontSize: 18}}>Air Components</Text>
              <View style={styles.cardInfo}>
                <Text style={styles.boxLabel}> Сoncentration of Carbon monoxide </Text>
                <Text style={styles.boxText}>{item.components.co} μg/m3</Text>
              </View>

              <View style={styles.cardInfo}>
                <Text style={styles.boxLabel}> Сoncentration of Nitrogen monoxide</Text>
                <Text style={styles.boxText}> {item.components.no} μg/m3</Text>
              </View>
             
              <View style={styles.cardInfo}>
                <Text style={styles.boxLabel}> Сoncentration of Nitrogen dioxide</Text>
                <Text style={styles.boxText}> {item.components.no2} μg/m3</Text>
              </View>

              <View style={styles.cardInfo}>
                <Text style={styles.boxLabel}> Сoncentration of Ozone</Text>
                <Text style={styles.boxText}> {item.components.o3} μg/m3</Text>
              </View>

              <View style={styles.cardInfo}>
                <Text style={styles.boxLabel}>  Сoncentration of Sulphur dioxide</Text>
                <Text style={styles.boxText}> {item.components.so2} μg/m3</Text>
              </View>

              <View style={styles.cardInfo}>
                <Text style={styles.boxLabel}> Сoncentration of PM2.5 (Fine particles matter)</Text>
                <Text style={styles.boxText}> {item.components.pm2_5} μg/m3</Text>
              </View>
              
              <View style={styles.cardInfo}>
              
                <Text style={styles.boxLabel}> Сoncentration of PM10 (Coarse particulate matter)</Text>
                <Text style={styles.boxText}> {item.components.pm10} μg/m3</Text>
                <View style ={{flexDirection:'row',marginBottom:5, alignItems:'center'}}>
                 </View>
              </View>
              
  
               
                <View style={styles.cardInfo}>
           
                 <Text style={styles.boxLabel}>Сoncentration of NH3 (Ammonia)</Text>
                 <Text style={styles.boxText}>{item.components.nh3} μg/m3</Text>
                 <View style ={{flexDirection:'row',marginBottom:5, alignItems:'center'}}>
                 </View>

               </View>

               </View>
               </SafeAreaView>
          )
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>

   
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f2f2'
  },
  containerInner: {
    paddingHorizontal: 5,
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
    alignItems: 'center'
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
    alignContent: 'center',
  },
  image: {
    width: 50,
    height: 40,
    alignContent: 'center',
  },
  tempContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'stretch'
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
    width:'100%',
    alignSelf:'center',
    marginBottom:2,
    marginTop:2,
  },
});

const mapStateToProps = state =>{
  return {
    info: state.data,
  
};

}

export default connect(mapStateToProps, {weatherActions})(PollutionScreen);