import { useState, useEffect } from 'react';
import { Button, Box, Stack, Typography, Divider } from '@mui/material';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { styled } from '@mui/material/styles';

import Rating from '@mui/material/Rating';

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
  flexDirection:'column',
}));

export const Work05 = () => {
  const [value, setValue] = useState(2);
  
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MyStack>
        <Typography component="legend">おすすめ度 ==&gt; {value}</Typography>
        <Rating
          name="favorite-rating"
          value={value}
          onChange={handleChange}
          precision={0.5}
        />
        <Typography component="legend">値変更不可</Typography>
        <Rating name="read-only" value={3} readOnly />
      </MyStack>
    </ThemeProvider>
  );
};
