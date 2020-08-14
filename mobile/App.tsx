import {StatusBar} from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {AppLoading} from 'expo'

import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'
import {Ubuntu_700Bold} from '@expo-google-fonts/ubuntu'
import {MeriendaOne_400Regular} from '@expo-google-fonts/merienda-one'

import Navigator from './src/routes/bottomTabs'

export default function App() {
  const [loadedFonts] = useFonts({Roboto_400Regular, Roboto_700Bold, Ubuntu_700Bold, MeriendaOne_400Regular})
  if(!loadedFonts)
  {
    return <AppLoading/>
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent />
      <Navigator/>
    </NavigationContainer>
  )
}