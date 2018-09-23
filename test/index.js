#!/usr/bin/env node
/**
 * @file
 * test/index.js
 * @authors qq616079491@gmail.com
 * @date    2018-09-23 22:19:50
 * @version 1.0.0
 */
const axios = require('../index.js');

async function getData () {
    const res = await axios.get({
        url: 'https://www.v2ex.com/api/members/show.json?username=luckyyulin&id=13536'
    });

    return res;
}

const data = (async function () {
    const data = await getData();

    console.log('debug-get', data);

    return data;
})();

async function postData () {
    const res = await axios.post({
        url: 'http://xxx',
        withCredentials: true
    });

    return res;
}

const res = (async function () {
    const data = await postData();

    console.log('debug-post', data);

    return data;
})();
