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
import img from '../images/scoreCard3x.png'

export default function LiveMatchCard(props) {
    
    return (
        <>
           
                <ImageBackground style={styles.container} source={img}
                  imageStyle={{ borderRadius: 10}}
                  >

                
             <Text style={styles.status}>.live</Text>
             <Text style={styles.place}>ind vs enf</Text>
              
              <View style={styles.teamAndScoreContrainer}>
                  <View style={styles.imgAndNameContainer}>
              <FastImage
                    style={styles.image}
                    source={{
                        uri:'https://unsplash.it/400/400?image=1',
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                />
                <Text style={styles.teamName}>IND</Text>
                  </View>
                  <Text style={styles.score}> 222/3 (26.5 ov)</Text>
              </View>
              <View style={styles.teamAndScoreContrainer}>
                  <View style={styles.imgAndNameContainer}>
              <FastImage
                    style={styles.image}
                    source={{
                        uri:'https://unsplash.it/400/400?image=1',
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                />
                <Text style={styles.teamName}>Eng</Text>
                  </View>
                  <Text style={styles.score} > 222/3 (26.5 ov)</Text>
              </View>
                        <Text style={styles.borderbottom}>india have won the toss</Text>
                        </ImageBackground>
           
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 4,
        // backgroundColor: 'yellow',
        padding:10,
        margin:10,
        // width:300,
        // height:200
    },
  
  
    teamAndScoreContrainer:{
        flexDirection:'row',
        justifyContent:"space-between",
        marginVertical:2,
      
        
    },
    imgAndNameContainer:{
        flexDirection:'row',
        
    },
    teamName:{
         paddingLeft:10,
         
         fontSize:15,
         color:'white'

    },

    image:{
        width: 30, height: 30 ,borderRadius:50
    },
    status:{
        fontWeight:'bold',
        color:'white'
    },
    place:{
        fontSize:12,
        color:'white'

    },
    borderbottom:{
        borderTopWidth:0.5,
        paddingTop:5,
        borderTopColor:'gray',
        fontSize:13,
        color:'white'

    },
    score:{
        fontWeight:'bold',
        color:'white'

    },
  
});