import { Button, Box, Stack, Typography, Divider } from '@mui/material';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { styled } from '@mui/material/styles';

const theme = createTheme({
  spacing : 20,
  palette : {
    primary : {
      main: '#00ff00',
      contrastText : '#ffffff',
    },
    myRed : {
      main: 'red',
    },
    myOrange : {
      main: 'orange',
    },
    myMelon : {
      superMelon: 'PaleGreen',
    },
  },
});

const MyStack = styled(Stack)({
  flexDirection: 'row',
  backgroundColor: '#cecece',
});

export const Work04 = () => (
  <ThemeProvider theme={theme}>
    <MyStack>
      <Box sx={{p:2, bgcolor:'myRed.main'}}>Apple</Box>
      <Box sx={{m:2, bgcolor:'myOrange.main'}}>Orange</Box>
      <Box sx={{bgcolor:'myMelon.superMelon'}}>Melon</Box>
    </MyStack>
  </ThemeProvider>
);
