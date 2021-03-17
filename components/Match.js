import React, { useState } from 'react';
import { Text, View ,StyleSheet,TouchableOpacity, } from 'react-native';
import {AnimatedTabBarNavigator,} from 'react-native-animated-nav-tab-bar'
import LiveAndUpcomingMatch from './LiveAndUpcomingMatch'
import NewsList from './NewsList'
function Home(){
  return(
    <Text>home</Text>
  )}
  function Result(){
    return(
      <Text>result</Text>
    )
  }
  
  

export default class Match extends React.Component{
 constructor(){
   super();
   this.state={
     liveAndUpComingMatch:true,
     result:false
   }
 }


render(){
  

  return(
    <>
    <View style={styles.container}>
    
         <TouchableOpacity
         style={[styles.button,this.state.liveAndUpComingMatch? styles.active :styles.Unactive]}
         onPress={(e)=>{this.setState({liveAndUpComingMatch:true,result:false})}}
     >
     <Text style={this.state.liveAndUpComingMatch?{fontWeight:'bold',color:'white'}:{color:'black'}}>live/upcoming</Text>
     </TouchableOpacity>
     <TouchableOpacity
         style={[styles.button,this.state.result? styles.active :styles.Unactive]}
       
       onPress={(e)=>{this.setState({result:true ,liveAndUpComingMatch:false})}}
       >
       <Text style={this.state.result?{fontWeight:'bold',color:'white'}:{color:'black'}}>result</Text>
     </TouchableOpacity>

     </View>
      <View style={{paddingHorizontal:0}} >
        {
          this.state.liveAndUpComingMatch? <LiveAndUpcomingMatch/> : <NewsList/>
        }
     
    </View>
    </>)
}
}

const styles =StyleSheet.create({
    container:{
        // flex:1,
        justifyContent:'center',
        flexDirection:'row',
        alignContent:'center',
        padding:10
        

    },
    button:{
      
      textAlign:'center',
      borderRadius:30,
      width:"30%",
      alignItems:'center',
      height:30,
      justifyContent:'center'
    },
    active:{
      backgroundColor:'#cc0000',
    },
    Unactive:{
      backgroundColor:"#e6e6e6"
    },
    activeResult:{
      backgroundColor:"green"
    },
    text:{
      color:'white',
      fontWeight:'bold'
    }
})