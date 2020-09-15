import React, { useEffect, useState } from 'react'
import { ImageBackground, View, Text, Modal, TouchableHighlight, TextInput } from 'react-native'
import { useRoute, RouteProp } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import { FontAwesome5 } from '@expo/vector-icons'

import styles from './styles'
import api from '../../services/api'
import ListItem, { Item } from './components/ListItem'
import BackButton from './components/BackButton'
import Filter, { Filters, defaultFilters } from './components/Filter'

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

    const [isFilterVisible, setIsFilterVisible] = useState(false)
    const [filters, setFilters] = useState<Filters>(defaultFilters)
    const [tmpFilters, setTmpFilters] = useState<Filters>(defaultFilters)

    useEffect(() =>
    {
        api.get(`${params.category}`).then(res => setList(res.data))
        // setKeywords([])
        console.log('opened')
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

    function handleIsFilterVisible()
    {
        setIsFilterVisible(!isFilterVisible)
    }

    function handleApplyFilters()
    {
        setFilters(tmpFilters)
        handleIsFilterVisible()
    }

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
            <Modal
                visible={isFilterVisible}
                transparent={true}
                animationType="slide"
            >
                <View style={styles.modalView}>
                    <Filter filters={filters} tmpFilters={tmpFilters} setTmpFilters={setTmpFilters} />
                    <View style={styles.modalButtonsContainer}>
                        <TouchableHighlight onPress={handleIsFilterVisible} style={styles.modalButton}>
                            <Text style={styles.modalButtonText}>Close</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={handleApplyFilters}
                            style={[styles.modalButton, {backgroundColor: '#26070B'}]}
                        >
                            <Text style={styles.modalButtonText}>Apply</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
            <BackButton />
            {/* <View style={styles.filterContainer}>
                <RectButton onPress={handleIsFilterVisible} style={styles.filterButton}>
                    <FontAwesome5 name="filter" size={20} color={'#420C14'} />
                    <Text style={styles.filterText}>Filter</Text>
                </RectButton>
            </View> */}
            <View style={styles.searchContainer}>
                <FontAwesome5 name="search" size={20} color={'#420C14'} />
                <TextInput
                    placeholder="Search"
                    placeholderTextColor="#420C14"
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