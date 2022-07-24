import React,{ useEffect,useState } from 'react'
import axios from 'axios'
import Container from '@mui/material/Container';
import ProfileCards from './ProfileCards'
import Box from '@mui/material/Box';
// search
import Search from './Search';

const Profiles = () => {
    const [users, setUsers] = useState([])
    const [searchBar, setSearchBar] = useState("");


    //Likes
    const makeLike = (id) => {
        setUsers(current =>{
            const newArray = current.map(item =>{
                if(item.id == id){
                    item.liked = !item.liked;
                }
                return item;
            });
            saveLocalLikes(newArray);

            return newArray;
        });        
    }

    
    
    //Get Users
    const getUsers =  () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            let likesLocal = JSON.parse(localStorage.getItem('likes'));

            setUsers(res.data.map((item, index) =>{
                if(likesLocal){
                    item.liked = likesLocal[index].liked;
                }
                return item;
            }));
        })
        .catch(err => {
            console.log(err)
        })

    }
    
    // Search Bar
    const searchProfile = (e) => {
        setSearchBar(e.target.value);
    }  
    
    const filteredProfiles = users.filter( user => {
        return user.name.toLowerCase().includes(searchBar.toLowerCase() )
    });
    
    //Save to Local Storage
    const saveLocalLikes = (arrayToSave) => {
        localStorage.setItem('likes', JSON.stringify(arrayToSave.map(item => ({
            id: item.id, 
            liked: item.liked

        }))));
    }
    
    //Use Effect
    useEffect(() => {
        getUsers()
    },[])
    
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
        {filteredProfiles.map((item) => (
            <ProfileCards 
                item={item} 
                key={item.id}
                makeLike={makeLike}
                users={users}
                setUsers={setUsers}
            /> 
        ))}
    </Container>
</Box>
)}

export default Profiles