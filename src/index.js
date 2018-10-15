/**
 * @file
 * src/index.js
 * @authors qq616079491@gmail.com
 * @date    2018-09-23 22:19:50
 * @version 1.0.0
 */
'use strict';

require('babel-polyfill');
const axios = require('axios');

axios.defaults.headers['accept'] = 'application/json';
axios.defaults.headers['content-type'] = 'application/json; charset=utf-8';
axios.defaults.timeout = 5000;

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response.data;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

async function get (options) {
    const fetchOption = Object.assign({
        method: 'get'
    }, options);
    const res = await axios(fetchOption);

    return res;
}

async function post (options) {
    const fetchOption = Object.assign({
        method: 'post'
    }, options);
    const res = await axios(fetchOption);

    return res;
}

exports = module.exports = {
    $: axios,
    get,
    post
};
