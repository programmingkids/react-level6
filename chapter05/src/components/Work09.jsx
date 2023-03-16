import { useState, useEffect } from 'react';
import { Button, Box, Stack, Typography, Divider } from '@mui/material';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { styled } from '@mui/material/styles';

import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';

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

export const Work09 = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MyStack>
        <CircularProgress color="primary" />
        <CircularProgress color="secondary" />
        <CircularProgress color="success" />
        <CircularProgress color="info" />
      </MyStack>
      <MyStack>
        <Box sx={{width:'100%'}}>
          <LinearProgress color="warning" />
        </Box>
      </MyStack>
    </ThemeProvider>
  );
};
