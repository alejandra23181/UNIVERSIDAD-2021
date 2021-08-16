import React from 'react'
import { useState, useEffect, useCallback } from 'react'
import getPost from '../helpers/getPost';
import { getUser } from '../helpers/getUser'

/*
const initialUser = {
    id: 1,
    name: "Maria",
    username: "mariama",
    email: "maria@gmail.co"
}

const initialPost = [ 
{
    userId: 1,
    id: 1,
    title: "Post 1",
},
{
    userId: 2,
    id: 2,
    title: "Post 2",
},
]
*/

const FetchUser = () => {
    const [user, setUser] = useState({});
    const [post, setPost] = useState([]);

    const updateUser=()=>{
        getUser()
        .then((userApi)=>{
            setUser(userApi)
        })
    }

    const updatePost = useCallback(()=>{
        getPost(user.id)
        .then((newPost) => {
            setPost(newPost);
        })
    }, [user?.id])

    useEffect(()=>{
        updateUser()
    },[])

    useEffect(()=>{
        if(user?.id){updatePost();}
    },[user, updatePost])

    return (
        <div>
            <h2>{user.name}</h2>
            <h2>{user.email}</h2>
            <button onClick={updateUser}>Otro usuario</button>
            <br />
            <h2>Post - User</h2>
            <ul>
                {post.map(post=>(
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default FetchUser
