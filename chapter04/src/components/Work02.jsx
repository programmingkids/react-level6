import { Button, Box, Stack, Typography, Divider } from '@mui/material';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { styled } from '@mui/material/styles';

const theme = createTheme({
  palette : {
    primary : {
      main: '#00ff00',
      contrastText : '#ffffff',
    },
    myRed : {
      main: 'red',
      contrastText : '#ffffff',
    },
    myOrange : {
      main: 'orange',
      contrastText : '#ffffff',
    },
  },
});

const MyStack = styled(Stack)({
  padding: 20,
  flexDirection:'row',
  justifyContent:'space-around',
  backgroundColor: '#cecece',
});

export const Work02 = () => (
  <ThemeProvider theme={theme}>
    <MyStack>
      <Button variant="contained" color="primary">クリック</Button>
      <Button variant="contained" color="myRed">クリック</Button>
      <Button variant="contained" color="myOrange">クリック</Button>
    </MyStack>
  </ThemeProvider>
);
