/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

// eslint-disable-next-line react/prop-types
const Search = ({ users,searchBar,searchProfile }) => {


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