import React from 'react'
import {ImageBackground, View, Image, Text} from 'react-native'
import {RectButton} from 'react-native-gesture-handler'

import styles from './styles'

const Home = () =>
{
    return (
        <ImageBackground
            source={require('../../assets/background.png')}
            style={styles.container}
        >
            <View style={styles.logoContainer}>
                <Image source={require('../../assets/logo.png')} style={styles.logo} />
            </View>

            <View style={styles.promptContainer}>
                <Text style={styles.prompt}>Which quiz do you want to play?</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <RectButton style={styles.button} onPress={() => {}}>
                    <Text style={styles.buttonText}>Name by image</Text>
                </RectButton>
                <RectButton style={styles.button} onPress={() => {}}>
                    <Text style={styles.buttonText}>Image by name</Text>
                </RectButton>
                <RectButton style={styles.button} onPress={() => {}}>
                    <Text style={styles.buttonText}>Role by name</Text>
                </RectButton>
            </View>
        </ImageBackground>
    )
}

export default Home