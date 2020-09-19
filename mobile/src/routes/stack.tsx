import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { zoomIn, zoomOut } from 'react-navigation-transitions'

interface StackProps
{
    screens: Array<{name: string, component: React.FC}>
}

const Stack: React.FC<StackProps> = ({screens}) =>
{
    const Navigator = createStackNavigator()
    return (
        <Navigator.Navigator
            headerMode='none'
            initialRouteName='Home'
            screenOptions=
            {{
                // transitionSpec: {open: zoomIn(100), close: zoomOut(100)}
            }}
        >
            {screens.map(screen => (
                <Navigator.Screen
                    key={screen.name}
                    name={screen.name}
                    component={screen.component}
                />
            ))}
        </Navigator.Navigator>
    )
}

export default Stack