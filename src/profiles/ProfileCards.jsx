import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';

const ProfileCards = ({ item }) => {

return (
<Card sx={{ 
    maxWidth: 345,
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    width:'20rem',
    backgroundColor:'#f5f5f5',
    borderRadius:'2rem',
}}>

{/* Like And Delete Icons */}
<CardActions disableSpacing
    sx={{
        display: 'grid',
        gridTemplateColumns:'auto auto',
        gridGap:'13rem',
        marginBottom:'1rem',
        height:'2rem',
        borderRadius:'100%',

        }}
>
    <IconButton aria-label="Like Profile">
        <FavoriteIcon fontSize='large'/>
    </IconButton>

    <IconButton aria-label="Delete Profile">
        <DeleteIcon fontSize='large'/>
    </IconButton>

</CardActions>

{/* Profile Image Section */}

<Card
    sx={{
        backgroundColor:'#eeeeee',
        width:'18rem',
        borderRadius:'1.9rem',
        }}
        >

<CardMedia
    component="img"
    height="194"
    src={`https://avatars.dicebear.com/v2/avataaars/${item.name}.svg?options[mood][]=happy`}
    alt="Profile Picture"

    sx={{
        display:'flex',
        margin:'auto',
        width:'10rem',
        }}
        />

</Card>

{/* Profile Information Section */}
<Card 
    sx={{
        backgroundColor:'#b3e5fc',
        width:'18rem',
        display:'flex',
        flexDirection:'column',
        marginBottom:'1rem',
        marginTop:'1rem',
        borderRadius:'1.9rem',
        lineHeight:'1rem',
        fontSize:'0.9rem',
        }}
    >
    <CardContent
    
        sx={{
            display:'flex',
            justifyContent:'space-between',
        }}
     >

    <Typography variant="name" color="text.secondary">
          Name:
    </Typography>
    <Typography variant="name" color="text.secondary">
        {item.name}
    </Typography>

</CardContent>

<CardContent
sx={{
    display:'flex',
    justifyContent:'space-between',
    }}
>

    <Typography variant="name" color="text.secondary">
        Email:
    </Typography>
    <Typography variant="name" color="text.secondary">
        {item.email}
    </Typography>

</CardContent>

<CardContent
sx={{
    display:'flex',
    justifyContent:'space-between',
    }}
    >

    <Typography variant="name" color="text.secondary">
    Phone:
    </Typography>
    <Typography variant="name" color="text.secondary">
        {item.phone}
    </Typography>

</CardContent>

<CardContent
    sx={{
        display:'flex',
        justifyContent:'space-between',
    }}
    >

    <Typography variant="name" color="text.secondary">
       Website:
    </Typography>
    <Typography variant="name" color="text.secondary">
        {item.website}
    </Typography>

</CardContent>
</Card>
</Card>
);
}
export default ProfileCards;