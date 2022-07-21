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
const [likes,setLikes] = useState([]);
const [isLiked,setIsLiked] = useState(false);
const [searchBar, setSearchBar] = useState("");

    useEffect(() => {
        getLocalLikes();
    },[])

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

    // Search
     const searchProfile = (e) => {
        setSearchBar(e.target.value);
    }  

    const filteredProfiles = users.filter( user => {
    return  user.name.toLowerCase().includes( searchBar.toLowerCase() )
    })

    //Local Storage
    const saveLocalLikes = () => {
        localStorage.setItem('likes', JSON.stringify(likes))
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
            searchBar={searchBar}
            searchProfile={searchProfile}
            setSearchBar={setSearchBar}
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
        filteredProfiles.map((item) => (
        
            <ProfileCards 
            item={item} 
            key={item.id}
            users={users} 
            setUser={setUser}
            likes={likes}
            setLikes={setLikes}
            isLiked={isLiked}
            setIsLiked={setIsLiked}
            /> 
            )
        )
        }
    </Container>
</Box>
)
}

export default Profiles
