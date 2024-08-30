import { Button, Box, Stack, Typography, Divider } from '@mui/material';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { styled } from '@mui/material/styles';

const theme = createTheme({
  palette : {
    primary : {
      main: '#ff0000',
      contrastText : '#ffffff',
    },
  },
  typography : {
    h1 : {
      fontSize : 25,
    },
    h2 : {
      fontSize : 20,
      color : 'red',
      fontWeight: 'bold',
    },
    myText1 : {
      fontSize: 20,
      color : 'blue',
      textDecoration: 'underline',
    },
  }
});

const MyStack = styled(Stack)({
  padding: 20,
  backgroundColor: '#cecece',
});

export const Work03 = () => (
  <ThemeProvider theme={theme}>
    <MyStack>
      <Typography variant="h1">Hello</Typography>
      <Typography variant="h2">Hello</Typography>
      <Typography variant="myText1">Hello</Typography>
    </MyStack>
  </ThemeProvider>
);
