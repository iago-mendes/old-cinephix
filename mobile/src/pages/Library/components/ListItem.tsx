import React from 'react'
import { Image, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import styles from '../styles'
import { useNavigation } from '@react-navigation/native'

interface ItemProps
{
    item: Item
    category: string
}

export interface Item
{
    id: number
    name: string
    image: string
    isMovie?: boolean
    isSeries?: boolean
    isUniverse?: boolean
}

const ListItem: React.FC<ItemProps> = ({item, category}) =>
{
    const {navigate} = useNavigation()

    function navigateToItem()
    {
        navigate('Item', {category, id: item.id})
    }

    return (
        <RectButton onPress={navigateToItem} style={styles.listItem}>
            <Image source={{uri: item.image}} style={styles.listItemImage} />
            <Text style={styles.listItemName} >{item.name}</Text>
        </RectButton>
    )
}

export default ListItem