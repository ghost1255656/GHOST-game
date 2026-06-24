import React from 'react';
import {View,Text} from 'react-native';

export default function HomeScreen(){
 return <View style={{flex:1,backgroundColor:'#090909',padding:30}}>
 <Text style={{color:'white',fontSize:30}}>Game Lobby</Text>
 <Text style={{color:'red',marginTop:20}}>Coin Collector</Text>
 <Text style={{color:'red'}}>Racing</Text>
 <Text style={{color:'red'}}>Survival Arena</Text>
 <Text style={{color:'red'}}>Hide & Seek</Text>
 <Text style={{color:'red'}}>Parkour</Text>
 </View>
}
