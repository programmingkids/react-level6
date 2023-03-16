import { Button, Box, Stack, Typography, Divider } from '@mui/material';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { styled } from '@mui/material/styles';

const theme = createTheme({
  palette : {
    primary : {
      main: '#ff0000',
    }
  },
});

const MyStack = styled(Stack)({
  padding: 20,
  flexDirection:'row',
  justifyContent:'space-around',
  backgroundColor: '#cecece',
});

export const Work01 = () => (
  <ThemeProvider theme={theme}>
    <MyStack>
      <Button variant="text" color="primary">クリック</Button>
      <Button variant="contained" color="primary">クリック</Button>
      <Button variant="outlined" color="primary">クリック</Button>
    </MyStack>
  </ThemeProvider>
);
