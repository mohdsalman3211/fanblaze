
import React from "react";
import { FlatList, Text, View ,StyleSheet,ScrollView,Button} from "react-native";
import NewsCard from './NewsCard'
const data = ["Germany", "Australia", "Sri Lanka", "Japan"];
import newsData from '../data/news.json'
import DetailComponent from './DetailComponent'
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from './DetailScreen'




class NewsList extends React.Component {
    constructor(props){
        super(props);
    }

 getListViewItem = (props) => {  
   this.props.navigation.navigate('Details')
}  
render(){
      
        return (
              
               <FlatList
               data={newsData.data}
               renderItem={({item}) =>
               <NewsCard data={item} onPress={this.getListViewItem.bind(this,item)} />
               }    
           />
        );
    }
}

const Stack = createStackNavigator();

function Navigator() {
    
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={NewsList} />
          <Stack.Screen name="Details" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Navigator;

    const styles = StyleSheet.create({  
        container: {  
            flex: 1,  
        },  
        item: {  
            padding: 10,  
            fontSize: 18,  
            height: 44,  
        },  
    })  



