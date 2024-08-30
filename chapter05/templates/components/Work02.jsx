import { useState, useEffect } from 'react';
import { Button, Box, Stack, Typography, Divider } from '@mui/material';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { styled } from '@mui/material/styles';

import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

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

export const Work02 = () => {
  const [value, setValue] = useState('rock');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MyStack>
        <FormControl>
          <FormLabel id="radio-buttons-group-label">Music</FormLabel>
          <RadioGroup
            row
            aria-labelledby="radio-buttons-group-label"
            defaultValue="rock"
            name="radio-buttons-group"
            onChange={handleChange}
          >
            <FormControlLabel value="rock" control={<Radio />} label="ロック" />
            <FormControlLabel value="pops" control={<Radio />} label="ポップス" />
            <FormControlLabel value="classic" control={<Radio />} label="クラシック" />
            <FormControlLabel value="anime" control={<Radio />} label="アニソン" />
          </RadioGroup>
        </FormControl>      
      </MyStack>
      <MyStack>
        選択した値: {value}
      </MyStack>
    </ThemeProvider>
  );
};
