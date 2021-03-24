import React from "react";
import { FlatList, Text, View ,StyleSheet,ScrollView,Button} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function DetailScreen(){
    return(

            <View  style={{ flex: 1,backgroundColor:"lightgray"}}>
           <ScrollView>
        <View style={{  backgroundColor:'white',padding:10,margin:10,borderRadius:10}}>
 
 <Text style={{fontSize:22,paddingVertical:10}}>ind vs eng post match preview</Text>
 <Text style={{fontSize:14,}}>Now our stack has two routes, a Home route and a Details route. A route can be specified by using the Screen component. The Screen component accepts a name prop which corresponds to the name of the route we will use to navigate, and a component prop which corresponds to the component it'll render.
 DetailsScreen component. The initial route for the ou will now see the Details screen. Then change it back to Home and 

 </Text>


 <View style={{backgroundColor:"green",width:100,padding:5,marginVertical:10,
 flexDirection:'row',borderRadius:20,justifyContent:'space-evenly',
 
 backgroundColor:'green'}}>
 <Icon name='sign-language' size={20} color='orange' />
  <Text > 100 Claps</Text>
 </View>
 </View>
 </ScrollView>
            </View>


    )
}
