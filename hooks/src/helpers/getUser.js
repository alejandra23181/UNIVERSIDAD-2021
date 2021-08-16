//import React from 'react'

export const getUser = async () => {
    const userId = Math.floor(Math.random()*10)+1;
    const url="https://jsonplaceholder.typicode.com/users/"+userId
    const res = await fetch(url)
    const data = await res.json()
    return data;
}

