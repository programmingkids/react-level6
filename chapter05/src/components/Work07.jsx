import { useState, useEffect } from 'react';
import { Button, Box, Stack, Typography, Divider } from '@mui/material';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { styled } from '@mui/material/styles';

import { MyCard } from './Work07Card';
import { Data } from './Work07Data';

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
  flexWrap:'wrap',
  justifyContent: 'start',
  gap : 40,
}));

export const Work07 = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MyStack>
        {Data.map(d => <MyCard {...d} />)}
      </MyStack>
    </ThemeProvider>
  );
};
