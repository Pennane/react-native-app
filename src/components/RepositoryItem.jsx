import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from './Text'
import Badge from './Badge'
import RepositoryStat from './RepositoryStat'
import Theme from '../theme'


const styles = StyleSheet.create({
    repository: {
        padding: 4,
        backgroundColor: Theme.colors.itemBackground
    },
    flex: {
        display: 'flex'
    },
    rowFlex: {
        flexDirection: 'row'
    },
    alignItemsBaseline: {
        // alignItems: 'baseline'
    },
    justifyContentSpaceEvenly: {
        justifyContent: 'space-evenly'
    },
    flexGrow1: { flexGrow: 1 },
    flexGrow0: { flexGrow: 0 },
    imageContainer: {
        padding: 4,
    },
    tinyLogo: {
        width: 44,
        height: 44,
        borderRadius: 2
    }
});

const RepositoryItem = props => {
    const { id,
        fullName,
        description,
        language,
        forksCount,
        stargazersCount,
        ratingAverage,
        reviewCount,
        ownerAvatarUrl } = props

    return (
        <View style={{ ...styles.repository, ...styles.flex, ...styles.alignItemsBaseline }}>
            <View style={{ ...styles.flex, ...styles.rowFlex }}>
                <View style={{ ...styles.imageContainer, ...styles.flexGrow0 }}>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: ownerAvatarUrl,
                        }}></Image>
                </View>
                <View style={{ ...styles.flexGrow1 }}>
                    <Text fontWeight="bold">{fullName}</Text>
                    <Text color="textSecondary">{description}</Text>
                    <Badge>{language}</Badge>
                </View>
            </View>
            <View style={{ ...styles.flex, ...styles.rowFlex, ...styles.justifyContentSpaceEvenly }}>
                <RepositoryStat stat="stars" value={stargazersCount} />
                <RepositoryStat stat="forks" value={forksCount} />
                <RepositoryStat stat="reviews" value={reviewCount} />
                <RepositoryStat stat="rating" value={ratingAverage} />
            </View>


        </View>

    );
};

export default RepositoryItem