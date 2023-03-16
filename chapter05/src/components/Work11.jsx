import { useState, useEffect } from 'react';
import { Button, Box, Stack, Typography, Divider } from '@mui/material';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { styled } from '@mui/material/styles';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

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

export const Work11 = () => {
  const [open, setOpen] = useState(false);
  
  const handleClose = () => {
    setOpen(false);
  };
  
  const handleToggle = () => {
    setOpen(!open);
  };
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MyStack>
        <Button 
          onClick={handleToggle} 
          color="error"
          variant="contained"
        >データ取得</Button>
      </MyStack>
      <Backdrop 
        onClick={handleClose}
        open={open}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1 
        }}
      >
        <CircularProgress color="error" />
      </Backdrop>
    </ThemeProvider>
  );
};
