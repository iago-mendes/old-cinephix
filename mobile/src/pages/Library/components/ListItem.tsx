import React from 'react'
import { Image, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import styles from '../styles'
import { Item } from '../list'
import { useNavigation } from '@react-navigation/native'

interface ItemProps
{
    item: Item
    category: string
}

const ListItem: React.FC<ItemProps> = ({item, category}) =>
{
    const {navigate} = useNavigation()

    function navigateToView()
    {
        navigate('View', {category, id: item.id})
    }

    return (
        <RectButton onPress={navigateToView} style={styles.listItem}>
            <Image source={{uri: item.image}} style={styles.listItemImage} />
            <Text style={styles.listItemName} >{item.name}</Text>
        </RectButton>
    )
}

export default ListItem