import React from 'react';
import { View, StyleSheet } from 'react-native';
import Theme from '../theme'
import Text from './Text'

const styles = StyleSheet.create({
    badge: {
        padding: 6,
        backgroundColor: '#22e',
        display: 'flex'
    }
})

const Badge = (props) => {
    return (
        <View style={styles.badge}>
            <Text color="textInverted" {...props} />
        </View>
    )
}

export default Badge