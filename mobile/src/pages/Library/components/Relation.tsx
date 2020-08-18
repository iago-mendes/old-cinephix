import React from 'react'
import { View, Image, Text } from 'react-native'

import styles from '../styles'

interface RelationProps
{
    relation1: {id: number, name: string, image: string}
    relation2: {id: number, name: string, image: string}
}

const Relation: React.FC<RelationProps> = ({relation1, relation2}) =>
{
    return (
        <View style={styles.relationGroup}>
            <View style={styles.relationItem}>
                <Image source={{uri: relation1.image}} style={styles.relationItemImage} />
                <Text style={styles.relationItemName}>{relation1.name}</Text>
            </View>
            <View style={styles.relationItem}>
                <Image source={{uri: relation2.image}} style={styles.relationItemImage} />
                <Text style={styles.relationItemName}>{relation2.name}</Text>
            </View>
        </View>
    )
}

export default Relation