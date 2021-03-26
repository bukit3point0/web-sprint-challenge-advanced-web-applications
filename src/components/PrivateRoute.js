import React, {useEffect} from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

import {axiosWithAuth} from '../helpers/axiosWithAuth'

const Page = styled.div``

const PrivateRoute = () => {

    const {push} = useHistory()

    useEffect(() => {
        axiosWithAuth().get('/colors')
        .then(res => {
            push('/bubble-page')
        })
        .catch(err => {
            console.log(err)
            push('/')
        })
    }, [])

    return(
        <Page>
            <h1>Checking credentials...</h1>
        </Page>
    )
}

export default PrivateRoute







//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in