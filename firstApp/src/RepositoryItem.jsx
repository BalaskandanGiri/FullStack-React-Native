import React from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';

const RepositoryItem = ({item}) => {
    console.log(item);
    return (
        <View style={{backgroundColor: 'pink'}}>
            <Text style={{color: 'blue'}}>FullName: {item.fullName}</Text>
            <Text>Description: {item.description}</Text>
            <Text>Language: {item.language}</Text>
            <Text>Stars: {item.stargazersCount}</Text>
            <Text>Forks: {item.forksCount}</Text>
            <Text>Reviews: {item.reviewCount}</Text>
            <Text>Ratings: {item.ratingAverage}</Text>
        </View>
    )
};

export default RepositoryItem;