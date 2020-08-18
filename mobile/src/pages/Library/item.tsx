import React, { useState, useEffect } from 'react'
import {ScrollView, View, Image, Text } from 'react-native'
import { useRoute, RouteProp } from '@react-navigation/native'

import styles from './styles'
import { Item as ItemInterface } from './list'
import api from '../../services/api'
import BackButton from './components/BackButton'
import Relation from './components/Relation'

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
        <View style={styles.scrollContainer}>
            <ScrollView>
                <View style={styles.container}>
                <BackButton />
                    <View style={styles.infoContainer}>
                        <Image source={{uri: info.image}} style={styles.itemImage} />
                        <Text style={styles.itemName}>{info.name}</Text>
                        <View style={styles.relationsContainer}>
                            <Text style={styles.relationsTitle}>
                                {info.characters_media && 'Characters & Media'}
                                {info.celebrities_media && 'Celebrities & Media'}
                                {info.celebrities_characters && 'Celebrities & Characters'}
                            </Text>
                            {info.characters_media?.map(({character, media}) => (
                                <Relation
                                    key={`${character.id}-${media.id}`}
                                    relation1={character}
                                    relation2={media}
                                />
                            ))}
                            {info.celebrities_media?.map(({celebrity, media}) => (
                                <Relation
                                    key={`${celebrity.id}-${media.id}`}
                                    relation1={celebrity}
                                    relation2={media}
                                />
                            ))}
                            {info.celebrities_characters?.map(({celebrity, character}) => (
                                <Relation
                                    key={`${celebrity.id}-${character.id}`}
                                    relation1={celebrity}
                                    relation2={character}
                                />
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Item