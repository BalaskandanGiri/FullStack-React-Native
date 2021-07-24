import React from 'react';
import { FlatList, View, StyleSheet, Text, Image } from 'react-native';

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    column: {
        flexDirection: 'column',
    },
    logo: {
        width: 66,
        height: 58,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    testColor: {
        color: 'red',
        backgroundColor: 'yellow'
    },
    space: {
        justifyContent: 'space-around',
    },
});

const RepositoryItem = ({item}) => {
    console.log(item);
    return (
        <View style={styles.column}>
            <View style={styles.row}>
                <View>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                    />
                </View>
                <View>
                    <Text style={{color: 'blue'}}>{item.fullName}</Text>
                    <Text style={{ flexShrink: 1 }}>{item.description}</Text>
                    <Text style={{color:'white', backgroundColor:'blue', flexGrow: 0}}>{item.language}</Text>
                </View>
            </View>
            <View style={[styles.row, styles.space]}>
                <View style={styles.column}>
                    <Text>{item.stargazersCount}</Text>
                    <Text>Stars</Text>
                </View>
                <View>
                    <Text>{item.forksCount}</Text>
                    <Text>Forks</Text>
                </View>
                <View>
                    <Text>{item.reviewCount}</Text>
                    <Text>Reviews</Text>
                </View>
                <View>
                    <Text>{item.ratingAverage}</Text>
                    <Text>Ratings</Text>
                </View>
            </View>
        </View>
        // <View style={{backgroundColor: 'pink'}}>
        //     <Text style={{color: 'blue'}}>FullName: {item.fullName}</Text>
        //     <Text>Description: {item.description}</Text>
        //     <Text>Language: {item.language}</Text>
        //     <Text>Stars: {item.stargazersCount}</Text>
        //     <Text>Forks: {item.forksCount}</Text>
        //     <Text>Reviews: {item.reviewCount}</Text>
        //     <Text>Ratings: {item.ratingAverage}</Text>
        // </View>
    )
};

export default RepositoryItem;