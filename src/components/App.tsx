import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  CssBaseline
 } from '@mui/material';

import HeaderController from './HeaderController';
import SearchBar from './SearchBar';

import PostListController from './PostListController';
import { useAppDispatch } from 'store/store'; 
import { PostModel } from 'models/models';

import './App.css';
import { setUser } from 'reducers/userSlice';

function App() {
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState('');

  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    const userJSON = JSON.parse(storedUser);
    dispatch(setUser({
      username: userJSON.username,
      token: userJSON.token,
    }));
  }

  const filterPredicate = ({ username, title, body } : PostModel) => {
    const searchValueLowerCase = searchValue.toLowerCase();

    return (
      username.toLowerCase().includes(searchValueLowerCase) ||
      title.toLowerCase().includes(searchValueLowerCase) ||
      body.toLowerCase().includes(searchValueLowerCase)
    );
  };

  return (
    <>
      <CssBaseline /> 
      <HeaderController />
      <Container maxWidth="lg">
        <Box my={2}>
          <SearchBar onChange={setSearchValue} />
        </Box>
        <PostListController filterPredicate={filterPredicate} />
      </Container>
    </>
  );
}

export default App;
