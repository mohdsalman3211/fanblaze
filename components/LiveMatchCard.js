import * as React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    ImageBackground
} from 'react-native';
import FastImage from 'react-native-fast-image'
import img from '../images/abd.jpg'

export default function LiveMatchCard() {
    return (
        <>
            <View style={styles.container}>
                <ImageBackground source={img} style={styles.image}>
                    
                    </ImageBackground>
                        
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: 'red',
        padding:10,
        borderRadius:10,
        margin:10,
  
    },
     image: {
    flex: 1,
    resizeMode: "cover",
    width: null,
    height: null,
  
  },
    teamAndScoreContrainer:{
        flexDirection:'row',
        justifyContent:"space-between",
        paddingVertical:5
        
    },
    imgAndNameContainer:{
        flexDirection:'row',
        
    },
    teamName:{
         paddingLeft:10,
        textAlign:'center'
    },

    image:{
        width: 30, height: 30 ,borderRadius:50
    },
    status:{
        fontWeight:'bold'
    },
    place:{
        fontSize:13
    }
});