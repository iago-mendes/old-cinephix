import React, { useEffect, useState } from 'react'
import { ImageBackground, View, Image, Text } from 'react-native'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'

import { FontAwesome5 } from '@expo/vector-icons'

import styles from './styles'
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native'
import api from '../../services/api'
import ListItem from './components/ListItem'

type ParamList =
{
    List: {category: string}
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

const List = () =>
{
    const {params} = useRoute<RouteProp<ParamList, 'List'>>()
    const [list, setList] = useState<Item[]>([])
    const {goBack} = useNavigation()

    useEffect(() =>
    {
        api.get(`${params.category}`).then(res => setList(res.data))
    }, [])

    return (
        <ImageBackground
            source={require('../../assets/background.png')}
            style={styles.container}
        >
            <View style={styles.backButtonContainer}>
                <BorderlessButton onPress={() => goBack()} style={styles.backButton} >
                    <FontAwesome5 name="arrow-left" size={24} color={"#D4D4F7"} />
                </BorderlessButton>
            </View>
            <View style={styles.list}>
                {list.map(item => (
                    <ListItem key={item.id} item={item} category={params.category} />
                ))}
            </View>
        </ImageBackground>
    )
}

export default List