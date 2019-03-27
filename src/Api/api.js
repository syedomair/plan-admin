import axios from 'axios';


export default axios.create({
  baseURL: 'http://localhost:8180/',
  // baseURL: `https://meem-workflow.herokuapp.com/`,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    // "Token": localStorage.getItem("token")
  },
});
