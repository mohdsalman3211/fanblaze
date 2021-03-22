
import React from "react";
import { FlatList, Text, View ,StyleSheet,ScrollView} from "react-native";
import NewsCard from './NewsCard'
const data = ["Germany", "Australia", "Sri Lanka", "Japan"];
import newsData from '../data/news.json'
import DetailComponent from './DetailComponent'
import Icon from 'react-native-vector-icons/FontAwesome';

function Homeee(){
    return(

        <ScrollView >
        <View style={{ flex: 0,backgroundColor:"gray" ,padding:10,margin:10,borderRadius:10}}>
 
        <Text style={{fontSize:22,paddingVertical:10}}>ind vs eng post match preview</Text>
        <Text style={{fontSize:14}}>Now our stack has two routes, a Home route and a Details route. A route can be specified by using the Screen component. The Screen component accepts a name prop which corresponds to the name of the route we will use to navigate, and a component prop which corresponds to the component it'll render.
        DetailsScreen component. The initial route for the stack is the Home route. notice that you will now see the Details screen. Then change it back to Home and 

        </Text>
       
       
        <View style={{backgroundColor:"green",width:100,padding:5,marginVertical:10,
        flexDirection:'row',borderRadius:20,justifyContent:'space-evenly',
        
        backgroundColor:'green'}}>
        <Icon name='sign-language' size={20} color='orange' />
         <Text > 100 Claps</Text>
        </View>
        </View>
      </ScrollView>

    )
}

class NewsList extends React.Component {
    constructor(){
        super();
        this.state={
            isActive:false
        }
    }
getListViewItem = (item) => {  
    // Alert.alert("hii salman how are you"); 
    this.setState({
        isActive:true
    })

}  
render(){
     console.log('value--->',this.state.isActive)
      
        return (
               <>
               {
                   this.state.isActive?<Homeee />                   
               :<FlatList
               data={newsData.data}
               renderItem={({item}) =>
               <NewsCard data={item} onPress={this.getListViewItem.bind(this,item)} />
               }
               
           />
               }
                
               </>
        );
    }
}
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



export default NewsList;