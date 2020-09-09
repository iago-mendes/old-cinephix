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
    tmpFilters: Filters
    setTmpFilters: Function
}

const Filter: React.FC<FilterParams> = ({filters, tmpFilters, setTmpFilters}) =>
{
    const [classifications, setClassifications] = useState<Classification[]>([])
    
    useEffect(() =>
    {
        api.get('classifications').then(res => setClassifications(res.data))
        setTmpFilters(
        {
            keywords: filters.keywords,
            type: filters.type,
            classification: filters.classification
        })
    }, [])

    function handleKeywordsChange(text: string)
    {
        setTmpFilters(
        {
            keywords: text.split(' '),
            type: tmpFilters.type,
            classification: tmpFilters.classification
        })
    }

    function handleTypeChange(value: string)
    {
        setTmpFilters(
        {
            keywords: tmpFilters.keywords,
            type: value,
            classification: tmpFilters.classification
        })
    }

    function handleClassificationChange(id: number)
    {
        setTmpFilters(
        {
            keywords: tmpFilters.keywords,
            type: tmpFilters.type,
            classification: id
        })
    }

    return (
        <View>
            <View>
                <Text>Keywords</Text>
                <TextInput
                    value={tmpFilters.keywords.join(' ')}
                    onChangeText={text => handleKeywordsChange(text)}
                />
            </View>
            <View>
                <Text>Type of media</Text>
                <Picker
                    selectedValue={tmpFilters.type}
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
                    selectedValue={tmpFilters.classification}
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