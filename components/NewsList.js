
import React from "react";
import { FlatList, Text, View } from "react-native";
import NewsCard from './NewsCard'
const data = ["Germany", "Australia", "Sri Lanka", "Japan"];
import newsData from '../data/news.json'


const NewsList = () => {
//    console.log("data",newsData)

        return (
           
                <FlatList
               
                 
                    data={newsData.data}
                    renderItem={({item}) => <NewsCard data={item} />}
                />
         
        );
    }

export default NewsList;