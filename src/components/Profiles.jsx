import React,{ useEffect,useState } from 'react'
import axios from 'axios'

import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import ProfileCards from './ProfileCards'
import Box from '@mui/material/Box';
// search
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Search from './Search';

const Profiles = () => {

const [users, setUser] = useState([])
const [searchField, setSearchField] = useState("");
const [likes,setLikes] = useState([]);

    useEffect(() => {

        getUsers();
        saveLocalLikes();

    },[likes])


    const getUsers =  () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
        setUser(res.data)
        })
        .catch(err => {
        console.log(err)
        })

    }

    const saveLocalLikes = () => {
        localStorage.setItem('likes', JSON.stringify(users))
    }

    const getLocalLikes = () => {
        if(localStorage.getItem('likes') === null){
            localStorage.setItem('likes',JSON.stringify([]));
        }else{
            let likesLocal = JSON.parse(localStorage.getItem('likes'));
            setLikes(likesLocal);
        }
    }


return (
    <Box
    sx={{
        backgroundColor:'#ebebeb',
        padding: '2rem',
    }}
    >
        {/* Search */}
            <Search
            users={users}
            searchField={searchField}
            />

        {/* Search end */}
    <Container
     sx={{
        backgroundColor:'#ebebeb',
        padding: '2rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '5rem',
        justifyItems: 'center',
        justifyContent: 'center', 
     }}
     >
  
        
        {
        users.map((item) => (
        
            <ProfileCards 
            item={item} 
            key={item.id}
            users={users} 
            setUser={setUser}
            likes={likes}
            setLikes={setLikes}
            /> 
            )
        )
        }
    </Container>
</Box>
)
}

export default Profiles
