import React, { useEffect, useState } from 'react'
import { ImageBackground, View, Text, Modal, TouchableHighlight } from 'react-native'
import { useRoute, RouteProp } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import { FontAwesome5 } from '@expo/vector-icons'

import styles from './styles'
import api from '../../services/api'
import ListItem, { Item } from './components/ListItem'
import BackButton from './components/BackButton'
import Filter from './components/Filter'

type ParamList =
{
    List: {category: string}
}

const List = () =>
{
    const {params} = useRoute<RouteProp<ParamList, 'List'>>()
    const [list, setList] = useState<Item[]>([])

    const [isFilterVisible, setIsFilterVisible] = useState(false)

    useEffect(() =>
    {
        api.get(`${params.category}`).then(res => setList(res.data))
    }, [])

    function handleIsFilterVisible()
    {
        setIsFilterVisible(!isFilterVisible)
    }

    function handleApplyFilters()
    {
        handleIsFilterVisible()
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
                    <Filter />
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
            <View style={styles.filterContainer}>
                <RectButton onPress={handleIsFilterVisible} style={styles.filterButton}>
                    <FontAwesome5 name="filter" size={20} color={'#420C14'} />
                    <Text style={styles.filterText}>Filter</Text>
                </RectButton>
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