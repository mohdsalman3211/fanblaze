

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform
} from 'react-native';

import NewsCard from './components/NewsCard'
import NewsList from './components/NewsList'
import BottomTabBar from './components/BottomTabBar'
import LiveMatchCard from './components/LiveMatchCard'
const App= () => {
  
  return (
    <>
      

      <View style={styles.container}>
      <View >
    <ScrollView horizontal={true} >
    <LiveMatchCard/>
    <LiveMatchCard/>
    <LiveMatchCard/>
    <LiveMatchCard/>
    <LiveMatchCard/>
    </ScrollView>
        </View>
        
      <BottomTabBar style={{backgroundColor:'red'}}/>
    </View>
   
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    // backgroundColor:'lightgray'
  
  },
});

export default App;
