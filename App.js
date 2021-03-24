

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
import CenterTabBar from './components/CenterTabBar'
const App= () => {
  
  return (
    <>
      

      <View style={styles.container}>
       {/* <CenterTabBar/> */}
        
      {/* <View >
    <ScrollView horizontal={true} >
    <LiveMatchCard/>
    <LiveMatchCard/>
    <LiveMatchCard/>
    <LiveMatchCard/>
    <LiveMatchCard/>
    </ScrollView>
        </View> */}
      <BottomTabBar/>
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
