
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity

} from 'react-native';

import FastImage from 'react-native-fast-image'

function NewsCard(props) {

    return (
        <>
            <  TouchableOpacity
              style={styles.container} onPress={props.onPress}>
                <FastImage
                    style={{ width: 100, height: 100 }}
                    source={{
                        uri: props.data.image,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                />
                <View style={styles.heading}>
                    <Text style={styles.text} numberOfLines={2}>{props.data.title}</Text>
                    <Text>{new Date().toDateString()}</Text>
                </View>
            </    TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',   
        padding: 10,
        backgroundColor:'lightgray',
        marginBottom:10,
        marginHorizontal:10,
        borderRadius:10
    },
    heading: {
        padding:10,
        flex: 1,
        justifyContent:'space-between'
    },
  
})
export default NewsCard