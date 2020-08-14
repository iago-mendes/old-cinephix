import React from 'react'
import {ImageBackground, View, Text} from 'react-native'
import {RectButton} from 'react-native-gesture-handler'

import styles from './styles'
import { useNavigation } from '@react-navigation/native'

const Home = () =>
{
    const {navigate} = useNavigation()

    function navigateToList(category: string)
    {
        navigate('List', {category})
    }

    return (
        <ImageBackground
            source={require('../../assets/background.png')}
            style={styles.container}
        >
            <View style={styles.promptContainer}>
                <Text style={styles.prompt}>Which category do you want to see?</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <RectButton style={styles.button} onPress={() => navigateToList('celebrities')}>
                    <Text style={styles.buttonText}>Celebrities</Text>
                </RectButton>
                <RectButton style={styles.button} onPress={() => navigateToList('characters')}>
                    <Text style={styles.buttonText}>Characters</Text>
                </RectButton>
                <RectButton style={styles.button} onPress={() => navigateToList('media')}>
                    <Text style={styles.buttonText}>Media</Text>
                </RectButton>
            </View>
        </ImageBackground>
    )
}

export default Home