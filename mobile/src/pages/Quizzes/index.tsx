import React from 'react'

import Stack from '../../routes/stack'
import Home from './home'

const Quizzes = () =>
{
    const screens =
    [
        {name: 'Home', component: Home}
    ]

    return (
        <Stack screens={screens} />
    )
}

export default Quizzes