import React from 'react';
import { Text, View ,StyleSheet ,FlatList,} from 'react-native';
import ProfileScreenCard from './ProfileScreenCard';
import ProfileData from '../data/profileList.json'


export default function ProfileScreenList(){

    const data=[1,2,3,4,5,6,6,7,8]
    return(
        <>
        <FlatList
            data={ProfileData.data}
            renderItem={({item}) => <ProfileScreenCard data={item} />}
        />
        </>
    )
} 