import React,{ useEffect,useState } from 'react'
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

const Search = ({ users }) => {

 
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
        renderInput={(params) => <TextField {...params} label="Search" />}
    />

    </Stack>
 
  )
}

export default Search