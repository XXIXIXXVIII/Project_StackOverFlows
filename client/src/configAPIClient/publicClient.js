import axios from 'axios'
// import queryString from 'query-string'


const baseURL = 'http://localhost:8080'

const publicClient = axios.create({
  baseURL,
})


export default publicClient