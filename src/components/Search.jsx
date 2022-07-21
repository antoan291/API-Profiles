import React,{ useEffect,useState } from 'react'
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

const Search = ({ users,setSearchBar,searchBar,searchProfile }) => {

//  const searchProfile = (e) => {
//   setSearchBar(e.target.value);
//  }
//  let dataSearch = users.filter(item => {
//   return Object.keys(item).some(key=>
//     item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
//     )
//  })
  return (
 
    <Stack spacing={2} sx={{ 
        width: 300,
        display:'flex',
        margin:'auto',
        backgroundColor:'#fff'}}
        >
    <Autocomplete
        id="Search"
        freeSolo
        options={users.map((option) => option.name)}
        renderInput={(params) => <TextField {...params} label="Search" 
        value={searchBar}
        onChange={searchProfile.bind(this)}
        />}
    />

    </Stack>
 
  )
}

export default Search