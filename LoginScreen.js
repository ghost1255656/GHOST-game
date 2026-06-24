import React,{useState} from 'react';
import {View,Text,Button,ActivityIndicator} from 'react-native';
import {googleLogin} from '../firebase/auth';

export default function LoginScreen({navigation}){
 const [loading,setLoading]=useState(false);

 async function login(){
  setLoading(true);
  try{
   await googleLogin();
   navigation.replace('Home');
  }catch(e){
   alert(e.message);
  }
  setLoading(false);
 }

 return <View style={{flex:1,backgroundColor:'#050505',alignItems:'center',justifyContent:'center'}}>
 <Text style={{color:'#ff004c',fontSize:35,fontWeight:'bold'}}>GHOST PLAY</Text>
 {loading?<ActivityIndicator/>:<Button title="Login With Google" onPress={login}/>}
 </View>
}
