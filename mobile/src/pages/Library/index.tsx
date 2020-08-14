import React from 'react'

import Stack from '../../routes/stack'
import Home from './home'
import List from './list'
import Item from './item'

const Library = () =>
{
    const screens =
    [
        {name: 'Home', component: Home},
        {name: 'List', component: List},
        {name: 'Item', component: Item}
    ]

    return (
        <Stack screens={screens} />
    )
}

export default Library