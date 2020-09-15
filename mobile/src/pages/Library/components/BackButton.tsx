import React from 'react'
import { View } from 'react-native'
import styles from '../styles'
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome5 } from '@expo/vector-icons'

const BackButton = () =>
{
    const {goBack} = useNavigation()

    return (
        <BorderlessButton onPress={() => goBack()} style={styles.backButton} >
            <FontAwesome5 name="arrow-left" size={30} color={"#D4D4F7"} />
        </BorderlessButton>
    )
}

export default BackButton