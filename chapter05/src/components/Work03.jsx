import { useState, useEffect } from 'react';
import { Button, Box, Stack, Typography, Divider } from '@mui/material';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { styled } from '@mui/material/styles';

import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';

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
  justifyContent:'space-around',
}));

export const Work03 = () => {
  const [values, setValues] = useState([]); 
  
  const handleChange = (e) => {
    if(e.target.checked) {
      setValues(values => values.concat([e.target.value]));
    } else {
      setValues(values => values.filter((v) => v !== e.target.value));
    }
  };
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MyStack>
        <FormControl>
          <FormLabel id="radio-buttons-group-label">Fruits</FormLabel>
          <FormGroup row>
            <FormControlLabel control={<Checkbox onChange={handleChange} value="Apple" />} label="リンゴ" />
            <FormControlLabel control={<Checkbox onChange={handleChange} value="Orange" />} label="オレンジ" />
            <FormControlLabel control={<Checkbox onChange={handleChange} value="Melon" />} label="メロン" />
            <FormControlLabel control={<Checkbox onChange={handleChange} value="Peach" />} label="ピーチ" />
            <FormControlLabel control={<Checkbox onChange={handleChange} value="Grape" />} label="グレープ" />
          </FormGroup>
        </FormControl>
      </MyStack>
      <Box textAlign="center">
        選択した値: {values.map(v => <span>{v},</span>)}
      </Box>
    </ThemeProvider>
  );
};
