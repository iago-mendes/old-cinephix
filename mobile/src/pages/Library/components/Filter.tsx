import React from 'react'
import { View, Text, TextInput, Picker } from 'react-native'

export interface Filters
{
    keywords?: string[]
    type?: {isMovie: boolean, isSeries: boolean, isUniverse: boolean}
    classifications?: number[]
}

interface FilterParams
{
    filters: Filters
    setFilters: Function
}

const Filter: React.FC<FilterParams> = ({filters, setFilters}) =>
{
    return (
        <View>
            <View>
                <Text>Keywords</Text>
                <TextInput />
            </View>
            <View>
                <Text>Type of media</Text>
                <Picker>
                    <Picker.Item label={'Movies'} value={'isMovie'} />
                    <Picker.Item label={'Series'} value={'isSeries'} />
                    <Picker.Item label={'Universes'} value={'isUniverse'} />
                </Picker>
            </View>
            <View>
                <Text>Media classifications</Text>
                <Picker>
                    <Picker.Item label={'Heroes'} value={'heroes'} />
                    <Picker.Item label={'Horror'} value={'horror'} />
                    <Picker.Item label={'Fantasy'} value={'fantasy'} />
                    <Picker.Item label={'Mistery'} value={'mistery'} />
                </Picker>
            </View>
        </View>
    )
}

export default Filter