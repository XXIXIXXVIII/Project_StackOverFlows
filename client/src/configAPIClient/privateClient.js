import axios from 'axios'
// import queryString from 'query-string'


const baseURL = 'http://localhost:8080'

const privateClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    // paramsSerializer: {
    //   encode: params => queryString.stringify(params)
    // },
    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
  }
})


export default privateClient