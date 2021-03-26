import {axiosWithAuth} from '../helpers/axiosWithAuth'

export const fetchColors = () => {
  return axiosWithAuth()
    .get('/colors')
    .then(res => {
        console.log(res.data)
        return res
    })
    .catch(err => {
        console.log(err)
        return(err)
    })
    
};