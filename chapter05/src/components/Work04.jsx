import { useState, useEffect } from 'react';
import { Button, Box, Stack, Typography, Divider } from '@mui/material';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { styled } from '@mui/material/styles';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

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
  justifyContent:'center',
}));

export const Work04 = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MyStack>
        <FormControl sx={{minWidth: 200}} color="success">
          <InputLabel id="city-label">City</InputLabel>
          <Select
            labelId="city-label"
            id="city-select"
            value={value}
            label="City"
            onChange={handleChange}
          >
            <MenuItem value="Tokyo">東京</MenuItem>
            <MenuItem value="NewYork">ニューヨーク</MenuItem>
            <MenuItem value="London">ロンドン</MenuItem>
            <MenuItem value="Paris">パリ</MenuItem>
            <MenuItem value="Berlin">ベルリン</MenuItem>
          </Select>
        </FormControl>
      </MyStack>
      <Box textAlign="center">
        選択した値: {value}
      </Box>
    </ThemeProvider>
  );
};
