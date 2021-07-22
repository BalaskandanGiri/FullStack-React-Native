import { Pressable, Text } from 'react-native';
import React from 'react';

const AppBarTab = ({text}) => {

    return (
        <Pressable><Text>{text}</Text></Pressable>
    );
}

export default AppBarTab;