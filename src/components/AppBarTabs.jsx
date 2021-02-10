import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Link } from 'react-router-native'
import Text from './Text'

const styles = StyleSheet.create({
    container: {
        paddingLeft: 15,
        paddingBottom: 4,
        display: 'flex',
        flexDirection: 'row'
    },
    link: {
        padding: 3,
        margin: 1,
        paddingBottom: 2,
        marginBottom: 0
    }
});

const AppBarTabs = () => {
    return (
        <View style={styles.container}>
            <Link to="/" component={TouchableWithoutFeedback} activeOpacity={0.8}>
                <Text style={styles.link} color="textInverted" fontSize="subheading" fontWeight="bold" >Repositories</Text>
            </Link>
            <Link to="/signin" component={TouchableWithoutFeedback} activeOpacity={0.8}>
                <Text style={styles.link} color="textInverted" fontSize="subheading" fontWeight="bold" >Sign in</Text>
            </Link>
        </View>
    )
};

export default AppBarTabs;