
  import styled from "styled-components";
  import React,{ useEffect,useState } from 'react'
  import axios from 'axios'
  import FavoriteIcon from '@mui/icons-material/Favorite';
  import DeleteIcon from '@mui/icons-material/Delete';



  const Container = styled.div`
     display:flex;
  `;
  
 
  const ProfileBox = styled.div`
    display:flex;
    width:20rem;
    height:100%;
    background-color:white;
    flex-direction:column;
    align-items:center;
    border-radius:30px;

  `
  const ProfilePic = styled.div` 
    display:flex; 
    background-color:#ebebeb;
    margin:2rem;
    width:17rem;
    height:10rem;
    border-radius:1rem;
    align-items:center;
    
  `
  const Image = styled.img`
      display:flex;
      height:10rem;
      align-items:center;
      margin:auto;

  `;

  const Info = styled.div`
    border-radius:1rem;
    margin-bottom:1rem;
    display:flex;
    width:17rem;
    font-size:0.9rem;
    flex-direction:column;
    background-color:#b8edff;
    text-align:center;
  
  `;

  const ContainerIcons = styled.div `
    display: grid;
    grid-template-columns: auto auto;
    grid-gap:250px;
    height:2rem;
    border-radius:100%;
  `
  const IconsDiv = styled.div`
    display:flex;
    // color:gray;
    background-color:#fff;
    align-items:center;
    justify-content:center;
    border-radius:100%;
    width:5rem;
    height:5em;
  `

  const InfoText = styled.div`
    display:flex;
    justify-content:space-between;
    margin:5px;
    `
  const ProfileText = styled.p`
  
    text-align: left;

  `

  const ProfileInfo = styled.p`
    text-align: right;
  `

  
  const ProfileUser = ({ item }) => {

    const [like, setLike] = useState(
      JSON.parse(localStorage.getItem('like')) || false
    );
    const [delUser, setDelete] = useState();

    const likeStyles = {
      color:like ? 'red' : 'gray'
    }
    useEffect(()=> {
      localStorage.setItem('like',JSON.stringify(like));
    },[like]);

    function likeOnClick(id){
      setLike([...like, id]);
    };

    const deleteUser = (id) => {
      axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => {
          console.log(res)
          setUser(res.data)
      })
      .catch(err => {
          console.log(err)
      })
    };


    return (
      <Container>
  

          <ProfileBox>
        <ContainerIcons>
         
              <IconsDiv style={{cursor:'pointer'}}>
          
                <FavoriteIcon fontSize="large"
                onClick ={() =>setLike(prevLike => !prevLike)} style={likeStyles}/>
             
                </IconsDiv>
                <IconsDiv style={{cursor:'pointer'}}>
                <DeleteIcon onClick={()=> deleteUser(item.id)} fontSize="large" style={{color:'gray'}}/>  
              </IconsDiv>

       </ContainerIcons>


            <ProfilePic>
              <Image src={`https://avatars.dicebear.com/v2/avataaars/${item.name}.svg?options[mood][]=happy`} />
            </ProfilePic>

            <Info>
              <InfoText>
                <ProfileText>Name:</ProfileText>
                <ProfileInfo>{item.name}</ProfileInfo>
              </InfoText>
              
              <InfoText>
                <ProfileText>Email:</ProfileText>
                <ProfileInfo>{item.email}</ProfileInfo>
              </InfoText>

              <InfoText>
                <ProfileText>Phone:</ProfileText>
                <ProfileInfo>{item.phone}</ProfileInfo>
              </InfoText>

              <InfoText>
                <ProfileText>Website:</ProfileText>
                <ProfileInfo>{item.website}</ProfileInfo>
              </InfoText>

            </Info>

            </ProfileBox>

      </Container>
    );
  };
  
  export default ProfileUser;