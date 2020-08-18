import React from 'react'
import { View, Image, Text } from 'react-native'

import styles from '../styles'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

interface RelationProps
{
    relation1: {id: number, name: string, image: string}
    relation2: {id: number, name: string, image: string}
    category1: string
    category2: string
}

const Relation: React.FC<RelationProps> = ({relation1, relation2, category1, category2}) =>
{
    const {navigate} = useNavigation()

    function navigateToItem1()
    {
        navigate('Item', {category: category1, id: relation1.id})
    }

    function navigateToItem2()
    {
        navigate('Item', {category: category2, id: relation2.id})
    }

    return (
        <View style={styles.relationGroup}>
            <RectButton onPress={navigateToItem1} style={styles.relationItem}>
                <Image source={{uri: relation1.image}} style={styles.relationItemImage} />
                <Text style={styles.relationItemName}>{relation1.name}</Text>
            </RectButton>
            <RectButton onPress={navigateToItem2} style={styles.relationItem}>
                <Image source={{uri: relation2.image}} style={styles.relationItemImage} />
                <Text style={styles.relationItemName}>{relation2.name}</Text>
            </RectButton>
        </View>
    )
}

export default Relation