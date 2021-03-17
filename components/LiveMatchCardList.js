import React from "react";
import { FlatList, Text, View } from "react-native";
import LiveMatchCard from './LiveMatchCard'

import liveMatchData from '../data/liveMatchData.json'


const LiveMatchCardList = () => {

        return (
           
                <FlatList
                    data={liveMatchData.data}
                    renderItem={({item}) => <LiveMatchCard data={item} />}
                />
         
        );
    }

export default LiveMatchCardList;