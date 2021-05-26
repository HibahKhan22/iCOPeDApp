import React, { useState } from 'react';
import { Text,TouchableOpacity,View, StyleSheet, Alert, TouchableWithoutFeedback, Keyboard,SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getDiet } from '../store/actions/dietActions';
import DietForm from '../components/DietForm';
import Diet from '../components/Diet';
import { SIZE } from '../utils/Dimentions';
import Ionicons from 'react-native-vector-icons/Ionicons';


const DietScreen = ({navigation})  => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { data1, error1 } = useSelector(state => state.weather);

  const searchSubmitHandler = () => {
    if (search === '') {
      return Alert.alert('Validation', 'Food name is required!', [{ text: 'OK' }]);
    }

    setLoading(true);
    dispatch(getDiet(search, () => setLoading(false), () => setLoading(false)));
    setSearch('');
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={styles.container}>
    <View style={{flexDirection:'row', height:50,backgroundColor: '#e6f2f2'}}>
    <TouchableOpacity 
      style={{
         width: 50,
         paddingLeft: SIZE.padding *2,
         justifyContent: 'center'

 //Defining of variables for interface from 28-35             
             
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
        <Text style={{fontWeight: 'bold', color: '#43BFC7', fontSize: 18}}>Diet Database</Text>
      </View>

//Styling of upper header and arrow on interface from 43-56

    </View>
    <TouchableOpacity
      style={{
         width: 50,
         paddingLeft: SIZE.padding *2,
         justifyContent: 'center'
       }}
      >

//Overall padding and dimensions of the given interface
        
      </TouchableOpacity>
  </View>
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <DietForm search={search} onSetSearch={setSearch} onSubmit={searchSubmitHandler} />
        <Diet loading={loading} data1={data1} error1={error1} />
      </View>
    </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

//Search bar and keyboard appearance from 72-80

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f2f2',
  },
});

export default DietScreen;
