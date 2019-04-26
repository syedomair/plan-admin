import axios from 'axios';


export default axios.create({
  baseURL: process.env.REACT_APP_API_SERVER,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    // "Token": localStorage.getItem("token")
  },
}

);
