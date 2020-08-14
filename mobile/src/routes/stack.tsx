import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

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
        >
            {screens.map(screen => (
                <Navigator.Screen key={screen.name} name={screen.name} component={screen.component} />
            ))}
        </Navigator.Navigator>
    )
}

export default Stack