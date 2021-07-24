import React from 'react';
import { FlatList, View, StyleSheet, Text, Image } from 'react-native';

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    column: {
        flexDirection: 'column',
    }
});

const RepositoryItem = ({item}) => {
    console.log(item);
    return (
        <View style={styles.row}>
            <View style={styles.column}>
                <View>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                    />
                </View>
                <View>
                    <Text style={{color: 'blue'}}>FullName: {item.fullName}</Text>
                    <Text>Description: {item.description}</Text>
                    <Text>Language: {item.language}</Text>
                </View>
            </View>
            <View>
                <Text>asd</Text>   
                <Image
                    style={styles.tinyLogo}
                    source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
                <Image
                    style={styles.logo}
                    source={{
                    uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
                    }}
                />
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