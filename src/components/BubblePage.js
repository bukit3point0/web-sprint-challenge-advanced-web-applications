import React, { useEffect, useState } from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom'

import {axiosWithAuth} from '../helpers/axiosWithAuth'

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  const {push} = useHistory()

  useEffect(() => {
    axiosWithAuth().get('/colors')
    .then(res => {
        console.log(res.data)
        setColorList(res.data)
        push('/bubble-page')
    })
    .catch(err => {
        console.log(err)
        push('/')
    })
}, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
