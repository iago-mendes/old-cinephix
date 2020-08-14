import React, { useState, useEffect } from 'react'
import { View, Image } from 'react-native'
import { useRoute, RouteProp } from '@react-navigation/native'

import styles from './styles'
import { Item as ItemInterface } from './list'
import api from '../../services/api'
import BackButton from './components/BackButton'

type ParamsItem =
{
    Item: {category: string, id: number}
}

interface Info
{
    name: string
    image: string
    type?: {isMovie: boolean, isSeries: boolean, isUniverse: boolean}
    classifications?: Array<{id: number, name: string}>
    characters_media?: Array<{character: ItemInterface, media: ItemInterface}>
    celebrities_media?: Array<{celebrity: ItemInterface, media: ItemInterface}>
    celebrities_characters?: Array<{celebrity: ItemInterface, character: ItemInterface}>
}

const Item = () =>
{
    const {params} = useRoute<RouteProp<ParamsItem, 'Item'>>()
    const [info, setInfo] = useState<Info>({name: '', image: 'default'})

    useEffect(() =>
    {
        api.get(`${params.category}/${params.id}`).then(res => setInfo(res.data))
    }, [params.id])

    return (
        <View style={styles.container}>
            <BackButton />
            <View style={styles.infoContainer}>
                <Image source={{uri: info.image}} style={styles.itemImage} />
            </View>
        </View>
    )
}

export default Item