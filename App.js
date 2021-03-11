

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
const App= () => {
  return (
    <>
      

      <View style={styles.scrollView}>
     <NewsList/>
      
     </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex:1,
    backgroundColor:'#C0C0C0'
  
  },
});

export default App;
