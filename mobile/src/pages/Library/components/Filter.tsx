import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Picker } from 'react-native'

import api from '../../../services/api'

export interface Filters
{
    keywords: string[]
    type: string
    classification: number
}

export const defaultFilters =
{
    keywords: [],
    type: '',
    classification: 0
}

interface Classification
{
    id: number
    name: string
}

interface FilterParams
{
    filters: Filters
    setFilters: Function
}

const Filter: React.FC<FilterParams> = ({filters, setFilters}) =>
{
    const [classifications, setClassifications] = useState<Classification[]>([])

    useEffect(() =>
    {
        api.get('classifications').then(res => setClassifications(res.data))
    }, [])

    function handleKeywordsChange(text: string)
    {
        setFilters(
        {
            keywords: text.split(' '),
            type: filters.type,
            classification: filters.classification
        })
    }

    function handleTypeChange(value: string)
    {
        setFilters(
        {
            keywords: filters.keywords,
            type: value,
            classification: filters.classification
        })
    }

    function handleClassificationChange(id: number)
    {
        setFilters(
        {
            keywords: filters.keywords,
            type: filters.type,
            classification: id
        })
    }

    return (
        <View>
            <View>
                <Text>Keywords</Text>
                <TextInput
                    value={filters.keywords.join(' ')}
                    onChangeText={text => handleKeywordsChange(text)}
                />
            </View>
            <View>
                <Text>Type of media</Text>
                <Picker
                    selectedValue={filters.type}
                    onValueChange={value => handleTypeChange(value)}
                >
                    <Picker.Item label={''} value={''} />
                    <Picker.Item label={'Movies'} value={'isMovie'} />
                    <Picker.Item label={'Series'} value={'isSeries'} />
                    <Picker.Item label={'Universes'} value={'isUniverse'} />
                </Picker>
            </View>
            <View>
                <Text>Media classification</Text>
                <Picker
                    selectedValue={filters.classification}
                    onValueChange={value => handleClassificationChange(value)}
                >
                    <Picker.Item label={''} value={0} />
                    {classifications.map(classification => (
                        <Picker.Item
                            label={classification.name}
                            value={classification.id}
                            key={classification.id} />
                    ))}
                </Picker>
            </View>
        </View>
    )
}

export default Filter