import React,{ useEffect,useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import ProfileUser from './ProfileUser'
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`
    background-color:#ebebeb;
    padding: 30px;
    
`
const Wrapper = styled.div`
    background-color:#ebebeb;
    padding: 30px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 5rem;
    justify-items: center;
    justify-content: center;  
`
const SearchCont = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    
`
const Input = styled.input`
    font-size:1rem;
    padding:15px 30px 15px 30px;
    border: none;
    border-radius:1rem;
`;

const Profiles = () => {

    const [users, setUser] = useState([])

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
           
            setUser(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    })

  return (
    <Container>
        
        <SearchCont>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: 30 }} />
        </SearchCont>

            <Wrapper>

                {
                    users.map((item) =>
                            <ProfileUser item={item} key={item.id} />                              
                            )
                }

            </Wrapper>
    </Container>
  )
}

export default Profiles