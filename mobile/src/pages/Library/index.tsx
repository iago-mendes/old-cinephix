import React from 'react'

import Stack from '../../routes/stack'
import Home from './home'
import List from './list'

const Library = () =>
{
    const screens =
    [
        {name: 'Home', component: Home},
        {name: 'List', component: List}
    ]

    return (
        <Stack screens={screens} />
    )
}

export default Library