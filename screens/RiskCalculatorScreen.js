import React, { useState } from 'react'
import { Component } from 'react';
import {number,onChangeNumber,text,onChangeText,Image,Linking,TouchableOpacity,StyleSheet, Text, View, ActivityIndicator, Alert, ScrollView, Button, FlatList,route,navigation, SafeAreaView, TextInput} from 'react-native';
import * as tf from '@tensorflow/tfjs'
import {Picker, RNPickerSelect} from '@react-native-community/picker'
import { SIZE } from '../utils/Dimentions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {bundleResourceIO, model} from '@tensorflow/tfjs';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import HomeButton from '../components/HomeButton';



class RiskCalculatorScreen extends Component {
   
    state = {
        isTfReady: false,
        model: false,
        sex: '1',
        smoker:'1',
        Asthma:'1',
        hpcopd:'1',
        age:'',
        heightf:'',
        heighti:'',
        weight:'',
        BMI:0,
        data:[2, 23, 31, 1, 1, 1],
        result:null,
      }

  // Defined variables for the interface from 16-29  

   
      async componentDidMount() {
        
        await tf.ready()
        this.setState({ isTfReady: true })
   
        const modelJSON = require('../assets/model/model.json');
        const modelWeights = require('../assets/model/weights.bin');
        const model = await tf.loadLayersModel(bundleResourceIO(modelJSON, modelWeights));
        model.summary();
        //resultp = await model.predict(this.data).data();
        //console.log("result", resultp);
        this.setState({ model: true})
      }

      checkState = () => {
        if(this.state.age.value == '' || this.state.heightf.value == '' || this.state.heighti.value == '' || this.state.weight.value == '')
        {
          Alert.alert("Please Enter All the Values.");
        }
         else{
         
         weightint = parseInt(this.state.weight);
         heightfint = parseInt (this.state.heightf)*12;
         heightint = parseInt (this.state.heighti);
         height2 = heightfint + heightint;
         this.state.BMI = Math.floor([weightint/ (height2 * height2)]*703);
         console.log(this.state);
         Alert.alert("All Text Input is Filled.");
         this.data = [parseInt(this.state.sex),parseInt(this.state.age),this.state.BMI,parseInt(this.state.smoker),parseInt(this.state.hpcopd),parseInt(this.state.Asthma)];
         console.log("to predrict: ",this.data);
         
         //this.result = await model.predict(this.data);
         
        }     
         
// if or else loops for model predicting of data in the interface from 35-64
         
    }
  render() {
  
   
    return (
        <SafeAreaView style={{backgroundColor:'#e6f2f2'}}>
          <ScrollView>
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
          <Text style={{fontWeight: 'bold', color: '#43BFC7', fontSize: 18}}>Risk Calculator</Text>
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
   
    <View style={{
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center'
       }}>
         <Text>
           TF: {this.state.isTfReady ? "Ready" : "Waiting"}
         </Text>
         <Text>
          MODEL: {this.state.model ? "Ready" : "Waiting"}
         </Text>
       </View>
       <View>
       <View style={{flexDirection:'column',backgroundColor:'white', width:'80%',alignSelf:'center',borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,marginBottom:10,marginTop:20}}>
      <Text style={{justifyContent:'center', alignContent:'center',fontSize:20,textAlign:'center',paddingTop:10}}>Age</Text>
      <TextInput 
        keyboardType='numeric'
        style={styles.input}
        onChangeText={(age) => this.setState({age})}
        value={this.state.age.value}
        placeholder="35"
      />
      <Text style={{justifyContent:'center', alignContent:'center',fontSize:20,textAlign:'center',paddingTop:10}}>Height(ft):</Text>
      <TextInput
        keyboardType='numeric'
        style={styles.input}
        onChangeText={(heightf) => this.setState({heightf})}
        value={this.state.heightf.value}
        placeholder="5"
      />
      <Text style={{justifyContent:'center', alignContent:'center',fontSize:20,textAlign:'center',paddingTop:10}}>Height(in)</Text>
      <TextInput
        keyboardType='numeric'
        style={styles.input}
        onChangeText={(heighti) => this.setState({heighti})}
        value={this.state.heighti.value}
        placeholder="8"
      />
      <Text style={{justifyContent:'center', alignContent:'center',fontSize:20,textAlign:'center',paddingTop:10}}>Weight (lb)</Text>
      <TextInput
        keyboardType='numeric'
        style={styles.input}
        onChangeText={(weight) => this.setState({weight})}
        value={this.state.weight.value}
        placeholder="176"

     // Overall styling and content placement of interface from 90-165

      />
      </View>
      <View style={{flexDirection:'column',backgroundColor:'white', width:'80%',alignSelf:'center',borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,marginBottom:10}}>
        <Text style={{justifyContent:'center', alignContent:'center',fontSize:20,textAlign:'center',paddingTop:10}}>Gender</Text>
       
       <Picker style={styles.picker}
          selectedValue={this.state.sex}
          onValueChange={(itemValue) => this.setState({sex: itemValue})}
        >
          <Picker.Item  style={styles.pickerItem} label="Male" value="1" />
          <Picker.Item  style={styles.pickerItem} label="Female" value="2" />
        </Picker>
      </View>

      <View style={{flexDirection:'column',backgroundColor:'white', width:'80%',alignSelf:'center',borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,marginBottom:10}}>
        <Text style={{justifyContent:'center', alignContent:'center',fontSize:20,textAlign:'center',paddingTop:10}}>Smoker</Text>
       
       <Picker style={styles.picker}
          selectedValue={this.state.smoker}
          onValueChange={(itemValue) => this.setState({smoker: itemValue})}
        >
          <Picker.Item  style={styles.picker} label="Yes" value="1" />
          <Picker.Item style={styles.picker} label="No" value="0" />
        </Picker>
      </View>

      <View style={{flexDirection:'column',backgroundColor:'white', width:'80%',alignSelf:'center',borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,marginBottom:10}}>
         <Text style={{justifyContent:'center', alignContent:'center',fontSize:20,textAlign:'center',paddingTop:10}}>Asthma</Text>
       
       <Picker  style={styles.picker}
          selectedValue={this.state.Asthma}
          onValueChange={(itemValue) => this.setState({Asthma: itemValue})}
        >
          <Picker.Item style={styles.picker} label="Yes" value="1" />
          <Picker.Item style={styles.picker} label="No" value="0" />
        </Picker>
      </View>

    

      <View style={{flexDirection:'column',backgroundColor:'white', width:'80%',alignSelf:'center',borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,marginBottom:10}}>
         <Text style={{justifyContent:'center', alignContent:'center',fontSize:20,textAlign:'center',paddingTop:10}}>Hospitalized for COPD in Last Year</Text>
       
       <Picker  style={styles.picker}
          selectedValue={this.state.hpcopd}
          onValueChange={(itemValue) => this.setState({hpcopd: itemValue})}
        >
          <Picker.Item  label="Yes" value="1" />
          <Picker.Item  label="No" value="0" />
        </Picker>
      </View>
      <View style ={{alignItems:'center',height:200}}>
      <HomeButton
            buttonTitle="Run Prediction"
            onPress={() => {this.checkState(); }}
            />
      </View>
    </View>
    </ScrollView>
      </SafeAreaView>
    )
  }
}
//Setup of various columns in the interphase from 170-235


//Remaining code is CSS for the interface styling 

const styles = StyleSheet.create({
    container: {
      flex: 0,
      backgroundColor: '#e6f2f2',
      alignItems:'center'
    },
    input: {
      height: 40,
      width:'80%',
      margin: 12,
      borderWidth: 1,
      borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    alignContent:'center',
    justifyContent:'center',
    alignSelf:'center'
    },
    text: {
      fontSize: 30,
      alignSelf: 'center',
      color: 'red'
   },
   title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  picker: {
    height: 150,  
    width: "50%",  
    color: '#e6f2f2',  
    justifyContent: 'center',  
    alignContent:'center',
    alignSelf:'center'
  },
  pickerItem: {
    color: 'red',
    height: 30,  
    width: "50%",  
    color: '#e6f2f2',  
    justifyContent: 'center',  
  },
  onePicker: {
    width: 100,
    height: 44,
    backgroundColor: '#FFF0E0',
    borderColor: 'black',
    borderWidth: 1,
  },
  onePickerItem: {
    height: 44,
    color: 'red'
  },
  twoPickers: {
    width: 100,
    height: 88,
    backgroundColor: '#FFF0E0',
    borderColor: 'black',
    borderWidth: 1,
  },
  twoPickerItems: {
    height: 88,
    color: 'red'
  },
});

export default RiskCalculatorScreen;
