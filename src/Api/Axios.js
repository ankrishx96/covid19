import React from 'react'
import axios from 'axios'

export const Axios = axios.create({
    baseURL : `https://api.covid19api.com`
})