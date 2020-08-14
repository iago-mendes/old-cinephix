import React from 'react'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import {FontAwesome5, Entypo} from '@expo/vector-icons'

import Quizzes from '../pages/Quizzes/index'
import Library from '../pages/Library/index'
import About from '../pages/About/index'

const Tab = createMaterialBottomTabNavigator()

const TabNavigator = () =>
{
    return (
        <Tab.Navigator
            backBehavior='history'
            initialRouteName='Quizzes'
            labeled={false}
            shifting={true}

        >
            <Tab.Screen
                name='Quizzes'
                component={Quizzes}
                options=
                {{
                    tabBarColor: '#0C102C',
                    tabBarIcon: ({color}) => (<FontAwesome5 name="question" size={24} color={'#D4D4F7'} />)
                }}
            />
            <Tab.Screen
                name='Library'
                component={Library}
                options=
                {{
                    tabBarColor: '#26070B',
                    tabBarIcon: ({color}) => (<Entypo name="open-book" size={24} color={'#D4D4F7'} />)
                }}
            />
            <Tab.Screen
                name='About'
                component={About}
                options=
                {{
                    tabBarColor: '#1A3D3C',
                    tabBarIcon: ({color}) => (<FontAwesome5 name="info" size={24} color={'#D4D4F7'} />)
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator