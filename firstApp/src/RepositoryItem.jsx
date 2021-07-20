import React from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';

const RepositoryItem = ({item}) => {
    return (
        <View>
            <Text>FullName: {item.fullName}</Text>
            <Text>Description: {item.description}</Text>
            <Text>Language: {item.language}</Text>
            <Text>Stars: {item.stars}</Text>
            <Text>Forks: {item.forks}</Text>
            <Text>Reviews: {item.reviews}</Text>
            <Text>Ratings: {item.ratings}</Text>
        </View>
    )
};

export default RepositoryItem;