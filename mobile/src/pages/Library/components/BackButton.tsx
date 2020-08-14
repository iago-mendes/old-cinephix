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
        <View style={styles.backButtonContainer}>
            <BorderlessButton onPress={() => goBack()} style={styles.backButton} >
                <FontAwesome5 name="arrow-left" size={24} color={"#D4D4F7"} />
            </BorderlessButton>
        </View>
    )
}

export default BackButton