import React, { useEffect, useState } from 'react'
import { ImageBackground, View } from 'react-native'
import { useRoute, RouteProp } from '@react-navigation/native'

import styles from './styles'
import api from '../../services/api'
import ListItem from './components/ListItem'
import BackButton from './components/BackButton'

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

    useEffect(() =>
    {
        api.get(`${params.category}`).then(res => setList(res.data))
    }, [])

    return (
        <ImageBackground
            source={require('../../assets/background.png')}
            style={styles.container}
        >
            <BackButton />
            <View style={styles.list}>
                {list.map(item => (
                    <ListItem key={item.id} item={item} category={params.category} />
                ))}
            </View>
        </ImageBackground>
    )
}

export default List