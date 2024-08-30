import { useState, useEffect } from 'react';
import { Button, Box, Stack, Typography, Divider } from '@mui/material';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { styled } from '@mui/material/styles';

import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

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

export const Work10 = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MyStack>
        <Tooltip title="Home">
          <IconButton color="primary">
            <HomeIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Email">
          <IconButton color="success">
            <EmailIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Calendar">
          <IconButton color="secondary">
            <CalendarMonthIcon />
          </IconButton>
        </Tooltip>
      </MyStack>
      <MyStack>
      </MyStack>
    </ThemeProvider>
  );
};
