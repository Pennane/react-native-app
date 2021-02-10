import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text'

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        padding: 3
    },

})


//https://stackoverflow.com/a/40724354/11212780
const SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];
const abbreviateNumber = (number) => {
    let tier = Math.log10(Math.abs(number)) / 3 | 0;
    if (tier == 0) return number;
    let suffix = SI_SYMBOL[tier];
    let scale = Math.pow(10, tier * 3);
    let scaled = number / scale;
    return scaled.toFixed(1) + suffix;
}

const RepositoryStat = props => {
    return (
        <View style={styles.container}>
            <Text fontWeight="bold">{abbreviateNumber(props.value)}</Text>
            <Text color="textSecondary">{props.stat}</Text>
        </View>
    )
}

export default RepositoryStat