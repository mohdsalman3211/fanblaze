import React from "react";
import { FlatList, Text, View } from "react-native";
import LiveMatchCard from './LiveMatchCard'

import liveMatchData from '../data/liveMatchData.json'


const LiveAndUpcomingMatch = () => {
   console.log("data live macth list",liveMatchData.data)
          const data= [1,2,3,4,5,6,7]
        return (
           
                <FlatList
                    data={data}
                    renderItem={({item}) => <LiveMatchCard data={item} />}
                />
         
        );
    }

export default LiveAndUpcomingMatch;