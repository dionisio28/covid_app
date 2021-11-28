import React from 'react'
import axios from 'axios';

const token = 'TOKEN HERE'
const baseURL = 'https://coronavirus.app/';

const instance = axios.create({
    baseURL: baseURL,
    timeout: 10000,
    headers: { 'Authorization': 'Bearer ' + token }
});

export default instance;