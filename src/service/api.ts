import React from 'react'
import axios from 'axios';

const token = 'IVzLu6Jx56wzwfhy6tgzaduilR1FY1Lg2IrKhBiJXWa0mZLYntuml6ETKXopgjNL'
const baseURL = 'https://coronavirus.app/';

const instance = axios.create({
    baseURL: baseURL,
    timeout: 10000,
    headers: { 'Authorization': 'Bearer ' + token }
});

export default instance;