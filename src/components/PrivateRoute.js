import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import {axiosWithAuth} from '../helpers/axiosWithAuth'

const Page = styled.div``

const initialColors = {
    colors: []
}

const PrivateRoute = () => {

    const [colors, setColors] = useState(initialColors)

    useEffect(() => {
        axiosWithAuth().get('/colors')
        .then(res => {
            console.log(res.data)
            setColors(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return(
        <Page>

        </Page>
    )
}

export default PrivateRoute







//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in