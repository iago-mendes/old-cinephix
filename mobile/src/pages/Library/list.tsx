import React, { useEffect, useState } from 'react'
import { ImageBackground, View, TextInput } from 'react-native'
import { useRoute, RouteProp } from '@react-navigation/native'

import { FontAwesome5 } from '@expo/vector-icons'

import styles from './styles'
import api from '../../services/api'
import ListItem, { Item } from './components/ListItem'
import BackButton from './components/BackButton'

type ParamList =
{
    List: {category: string}
}

const List = () =>
{
    const {params} = useRoute<RouteProp<ParamList, 'List'>>()
    const [list, setList] = useState<Item[]>([])
    const [filteredList, setFilteredList] = useState<Item[]>([])
    const [keywords, setKeywords] = useState<string[]>([])

    useEffect(() =>
    {
        api.get(`${params.category}`).then(res => setList(res.data))
    }, [])

    useEffect(() =>
    {
        setFilteredList(list)
    }, [list])

    useEffect(() =>
    {
        if (keywords.length === 0) setFilteredList(list)
        else
        {
            var tmpList: Item[] = []
            keywords.map(keyword =>
            {
                list.map(item =>
                {
                    var name = item.name.toLowerCase()
                    if (name.search(keyword.toLowerCase()) !== -1) tmpList.push(item)
                })
            })
            setFilteredList(tmpList)
        }
    }, [keywords])

    function handleSearchChange(text: string)
    {
        const tmp = text.split(' ')
        setKeywords(tmp)
    }

    return (
        <ImageBackground
            source={require('../../assets/background.png')}
            style={styles.container}
        >
            <BackButton />
            <View style={styles.searchContainer}>
                <FontAwesome5 name="search" size={20} color={'#420C14'} />
                <TextInput
                    placeholder="Search"
                    placeholderTextColor="#84380d"
                    style={styles.search}
                    value={keywords.join(' ')}
                    onChangeText={text => handleSearchChange(text)}
                />
            </View>
            <View style={styles.list}>
                {filteredList.map(item => (
                    <ListItem key={item.id} item={item} category={params.category} />
                ))}
            </View>
        </ImageBackground>
    )
}

export default List