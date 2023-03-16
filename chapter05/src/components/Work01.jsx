import { Button, Box, Stack, Typography, Divider } from '@mui/material';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { styled } from '@mui/material/styles';

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
  justifyContent:'space-around',
  backgroundColor: '#cecece',
}));

export const Work01 = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <MyStack>
      <HomeIcon color="primary" />
      <EmailIcon color="primary" />
      <CalendarMonthIcon color="primary" />
    </MyStack>
    <MyStack>
      <HomeIcon color="secondary" />
      <EmailIcon color="success" />
      <CalendarMonthIcon color="error" />
    </MyStack>
    <MyStack>
      <HomeIcon color="warning" fontSize="small" />
      <HomeIcon color="warning" fontSize="medium" />
      <HomeIcon color="warning" fontSize="large" />
    </MyStack>
  </ThemeProvider>
);
