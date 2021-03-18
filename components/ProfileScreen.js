import * as React from 'react';
import { Text, View ,StyleSheet ,ImageBackground,TouchableOpacity,Image} from 'react-native';
import FastImage from 'react-native-fast-image'
import ProfileScreenList from './ProfileScreenList';
import ProfileScreenCard from './ProfileScreenCard'
import ImagePicker from 'react-native-image-crop-picker';

import Icon from 'react-native-vector-icons/FontAwesome';
import img from '../images/scoreCard3x.png';
import pencilImage from '../images/pencil.png'

export default class ProfileScreen extends React.Component {
      constructor (props){
          super(props);
          this.state={
              image:'https://unsplash.it/400/400?image=1'
          }
      }
       imagePicker=()=>{
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => { 
            this.setState({image:image.path})
          });
    }

    render(){

        return(
            <View style={styles.container}>
              
              <ImageBackground 
              style={{flex:1}} source={img}>
                  <Text style={styles.logo}>Profile</Text>
              </ImageBackground>
    
          <View style={{flex:3,backgroundColor:'lightgray'}}>
             <View style={styles.profileCard}>
                 <Image source={pencilImage} style={{alignSelf:'flex-end',height:20,width:20,marginRight:10,}} />
           <TouchableOpacity onPress={()=>this.imagePicker()}
             style={{}} activeOpacity = { .5 } >
             <FastImage 
                        
                        style={styles.image}
                        source={{
                            uri:this.state.image,
                        }}
                        resizeMode={FastImage.resizeMode.contain}
                        />
                        </TouchableOpacity>
                    
                 <Text style={styles.userName}>Narendra Modi</Text>
    
                 <Text style={[styles.userEmail,styles.comon]}>salmanmohd3211@gmail.com</Text>
    
                 <Text style={[styles.userNumberAndDate,styles.comon]}>+91 9756305457   |   Member since 17 mar 2021</Text>
             </View>              
               <View style={{flex:1, backgroundColor:'white',marginHorizontal:10
               ,borderRadius:5 ,marginTop:10,padding:10}}><ProfileScreenList/></View>
        </View>
            </View>
        )
    }
}



const styles =StyleSheet.create({
    container:{
        flex:1,
    },
    logo:{
        paddingLeft:10,
        paddingTop:10,
        fontSize:25,
        fontWeight:'bold',
        color:'white'
    },
    profileCard :{
        height:200,
        backgroundColor:'white',
        marginHorizontal:10,
        paddingVertical:10,
        marginTop:'-20%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:5
    },  
    image:{
         width: 70,
         height: 70 ,
         borderRadius:50,
    },
    userName:{
        fontSize:20,
        paddingVertical:10,
        color:'black',
        fontWeight
        :'bold'
    },
    userNumberAndDate:{
      
        paddingVertical:5
    },
    comon: {
      color:'#4682B4',
    //   fontWeight:'bold'
    }
})