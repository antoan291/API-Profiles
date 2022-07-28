import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import ProfileCards from "./ProfileCard";
import Box from "@mui/material/Box";
import Search from "./Search";

const Profiles = () => {
  const [users, setUsers] = useState([]);
  const [searchBar, setSearchBar] = useState("");

  const handleLike = (id) => {
    setUsers((current) => {
      const newArray = current.map((profile) => {
        if (profile.id === id) {
          profile.liked = !profile.liked;
        }
        return profile;
      });
      saveLocalLikes(newArray);

      return newArray;
    });
  };

  const getUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        let likesLocal = JSON.parse(localStorage.getItem("likes"));

        setUsers(
          res.data.map((profile, index) => {
            if (likesLocal) {
              profile.liked = likesLocal[index].liked;
            }
            return profile;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const searchProfile = (e) => {
    setSearchBar(e.target.value);
  };

  const filteredProfiles = users.filter((user) => {
    return user.name.toLowerCase().includes(searchBar.toLowerCase());
  });

  const saveLocalLikes = (arrayToSave) => {
    localStorage.setItem(
      "likes",
      JSON.stringify(
        arrayToSave.map((profile) => ({
          id: profile.id,
          liked: profile.liked,
        }))
      )
    );
  };

  const deleteProfile = (id) => {
    setUsers(users.filter((el) => el.id !== id));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#ebebeb",
        padding: "2rem",
      }}
    >
      <Search
        users={users}
        searchBar={searchBar}
        searchProfile={searchProfile}
        setSearchBar={setSearchBar}
      />

      <Container
        sx={{
          backgroundColor: "#ebebeb",
          padding: "2rem",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "5rem",
          justifyItems: "center",
          justifyContent: "center",
          ["@media (max-width:1400px)"]: {
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
          },
          ["@media (max-width:1000px)"]: {
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
          },
          ["@media (max-width:780px)"]: {
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
          },
        }}
      >
        {filteredProfiles.map((profile) => (
          <ProfileCards
            profile={profile}
            key={profile.id}
            handleLike={handleLike}
            users={users}
            setUsers={setUsers}
            deleteProfile={deleteProfile}
          />
        ))}
      </Container>
    </Box>
  );
};

export default Profiles;
