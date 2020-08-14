import React from 'react'
import {ImageBackground, View, Image, Text} from 'react-native'

import styles from './styles'

const About = () =>
{
    return (
        <ImageBackground
            source={require('../../assets/background.png')}
            style={styles.container}
        >
            <View style={styles.iconContainer}>
                <Image source={require('../../assets/icon.png')} style={styles.icon} />
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.infoBox}>
                    <Text style={styles.infoBoldText}>Name:</Text>
                        <Text style={styles.infoText}>  Cinephix</Text>
                    <Text style={styles.infoBoldText}>Version:</Text>
                        <Text style={styles.infoText}>  beta</Text>
                    <Text style={styles.infoBoldText}>Developer:</Text>
                        <Text style={styles.infoText}>  Iago Braz Mendes</Text>
                    <Text style={styles.infoBoldText}>Description:</Text>
                        <Text style={styles.infoText}>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra, mi eget ultricies consectetur, felis magna ultricies dolor, sed porta sem mauris sed magna. Proin.</Text>
                </View>
            </View>
        </ImageBackground>        
    )
}

export default About