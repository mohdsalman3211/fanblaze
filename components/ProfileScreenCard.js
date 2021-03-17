import React from 'react';
import { Text, View ,StyleSheet ,FlatList,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ProfileScreenCard(props){
    return(
        <View style={styles.container}> 
                  <Icon name={props.data.icon} size={20} color={props.data.color} />
                   <Text style={styles.text}>{props.data.name}</Text>
                  
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        // flex:1,
        // marginHorizontal:10,
        // backgroundColor:'red',
        flexDirection:'row',
        padding:15,
        // borderRadius:5,
        // marginTop:10,
        borderBottomWidth:0.5,
        borderBottomColor:'gray'
    },
    text:{
        paddingLeft:15,
        fontWeight:'bold',
        fontSize:16
    }
})