import React from 'react';
import { View, StyleSheet } from 'react-native';
import Theme from '../theme'
import Constants from 'expo-constants';
import Tabs from './AppBarTabs'

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight + 3,
        paddingBottom: 10,
        backgroundColor: Theme.colors.appBarBackground
    }
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <Tabs />
        </View>
    )
};

export default AppBar;