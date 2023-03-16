import { useState, useEffect } from 'react';
import { Button, Box, Stack, Typography, Divider } from '@mui/material';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { styled } from '@mui/material/styles';

import Avatar from '@mui/material/Avatar';

import Image5 from './../images/image5.jpg';
import Image6 from './../images/image6.jpg';
import Image7 from './../images/image7.jpg';

const theme = createTheme({
  palette : {
    mode: 'light',
    background: {
        default: '#ececec',
    },
  },
});

const MyStack = styled(Stack)(({theme}) => ({
  padding: theme.spacing(2),
  flexDirection:'row',
  justifyContent: 'center',
  gap: 20,
}));

export const Work08 = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MyStack>
        <Avatar src={Image5} alt="Remy Sharp"/>
        <Avatar src={Image6} alt="Travis Howard"/>
        <Avatar src={Image7} alt="Cindy Baker"/>
      </MyStack>
      <MyStack>
        <Avatar sx={{bgcolor:'primary.dark'}}>A</Avatar>
        <Avatar sx={{bgcolor:'info.light'}}>BC</Avatar>
        <Avatar sx={{bgcolor:'error.main'}}>XY</Avatar>
      </MyStack>
    </ThemeProvider>
  );
};
