import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Button, navigation} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const DietData = ({ data }) => {
  const navigation = useNavigation(); 
  console.log("dietdata",data);
  console.log("parsed", data.parsed);
  console.log("sono: ",data.parsed[0].food.label);
  console.log("sono: ",data.parsed[0].food.image);
  const image = data.parsed[0].food.image;

  return ( <View style={styles.container} onStartShouldSetResponder={() => true}>
     
  <Text style={styles.title}>{data.parsed[0].food.label}</Text>

  <View style={styles.cardsWrapper}>

    <View style={styles.card}>
     <View style={styles.cardImgWrapper}>
        <Image
          source={{uri:image}}
          resizeMode="contain"
          style={styles.cardImg}
        />
      </View>
       
       

         <View style={styles.cardInfo}>
     
        <Text style={styles.cardTitle}>Label:</Text>
        <Text style={styles.cardDetails}>. {data.parsed[0].food.category}
        </Text>
        <Text style={styles.cardDetails}>. {data.parsed[0].food.categoryLabel}
        </Text>

      </View>
      </View>

     <View style={styles.cardInfo2}>
      <Text style={styles.cardTitle}>Nutrients:</Text>
      <View style={{flexDirection:'row'}}>
        <Text style={styles.cardDetails2}>Energy: </Text>
        <Text style={styles.cardDetails}>{data.parsed[0].food.nutrients.ENERC_KCAL} kcal</Text>
      </View>
      <View style={{flexDirection:'row'}}>
        <Text style={styles.cardDetails2}>Protein: </Text>
        <Text style={styles.cardDetails}>{data.parsed[0].food.nutrients.PROCNT} g</Text>
      </View>
      <View style={{flexDirection:'row'}}>
        <Text style={styles.cardDetails2}>Fat </Text>
        <Text style={styles.cardDetails}>{data.parsed[0].food.nutrients.FAT} g</Text>
      </View>
      <View style={{flexDirection:'row'}}>
        <Text style={styles.cardDetails2}>Carbs: </Text>
        <Text style={styles.cardDetails}>{data.parsed[0].food.nutrients.CHOCDF} g</Text>
      </View>
      <View style={{flexDirection:'row'}}>
        <Text style={styles.cardDetails2}>Fiber: </Text>
        <Text style={styles.cardDetails}>{data.parsed[0].food.nutrients.FIBTG} g</Text>
      </View>
      </View>
  

     
     </View>

  </View>

);
};

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#e6f2f2',
},

containerInner: {
paddingHorizontal: 20,

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
alignItems: 'center',
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
},
image: {
width: 50,
height: 40,
alignContent: 'center',
},
tempContainer: {
flexDirection: 'row',
justifyContent: 'space-around',
alignSelf: 'stretch',
},

cardInfo: {
  flex: 1,
    padding: 5,
    borderColor: '#ccc',
    borderWidth: 0,
    borderLeftWidth: 0,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: '#fff',
},

cardInfo2: {
    marginTop:15,
    padding: 15,
    borderColor: '#ccc',
    borderWidth: 0,
    borderLeftWidth: 0,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
},
cardsWrapper: {
  marginTop: 10,
  width: '90%',
  alignSelf: 'center',
},
cardTitle: {
  padding: 5,
  fontWeight: 'bold',
  fontSize: 20
},
card: {
  height: 130,
  marginVertical: 0,
  shadowColor: '#999',
  shadowOffset: {width: 0, height: 1},
  shadowOpacity: 0.8,
  shadowRadius: 2,
  flexDirection:'row',
  elevation: 2,

},
cardImgWrapper: {
  flex: 1,


},

cardDetails: {
  padding: 0,
  paddingTop:10,
  paddingLeft:5,
  fontSize: 15,
  color: '#555',
},
cardDetails2: {
  padding: 0,
  paddingTop:10,
  paddingLeft:5,
  fontSize: 15,
  color: 'black',
},
cardImg: {
  height: '100%',
  width: '100%',
  alignSelf: 'center',
  borderRadius: 0,
  borderBottomRightRadius: 0,
  borderTopLeftRadius: 10,
  borderTopRightRadius: 0,
  borderBottomRightRadius:0,
  borderBottomLeftRadius:10,
  backgroundColor: '#fff',
},
});

export default DietData;