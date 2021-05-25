import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView
} from 'react-native';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
//import {AuthContext} from '../navigation/AuthProvider';


const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  //const {login, googleLogin, fbLogin} = useContext(AuthContext);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        //source={require('../assets/rn-social-logo.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>Log In</Text>

// This variables define interface of sign up and login screen 


//Type of platform

      {Platform.OS === 'android' ? (
        <View>
//Social button text definition, color, and type for an Android user
        
          <SocialButton
            buttonTitle="Log In with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => navigation.navigate('MainTabScreen')}
          />
        </View>
      ) : null}
//Type of platform

      {Platform.OS === 'ios' ? (
        <View>
//Social button text definition, color, and type for an IOS user
        
          <SocialButton
            buttonTitle="Log In with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => navigation.navigate('MainTabScreen')}
          />
        </View>
      ) : null}

//Lines 62-89 describe text input interface for email and password input

      <Text style={{ fontFamily: 'Kufam',
            fontSize: 23,
            marginTop:10,
            marginBottom: 10,
            color: '#051d5f',}}>or</Text>
      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
          
      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />
          
// Commands from line 93-104 allow transiton between screens with a touch on screen
          
       <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => {}}>
        <Text style={styles.navButtonText}>
        
        </Text>
      </TouchableOpacity>
      
      <FormButton
        buttonTitle="Sign In"
        onPress={() => navigation.navigate('MainTabScreen')}
      />



     
    </ScrollView>
  );
};

export default LoginScreen;

//The rest of the code refers to CSS styling of screens 

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 20,
    flex: 1
  },
  logo: {
    height: 100,
    width: 100,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
    
  },
  forgotButton: {
    marginVertical: 35,
    
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato',
  },
});