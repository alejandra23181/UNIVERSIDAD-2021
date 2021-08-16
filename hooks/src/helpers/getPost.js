//import React from 'react'

const getPost = async (userId) => {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;
    const res = await fetch(url);
    const data = await res.json();  
    return data;
}

export default getPost
