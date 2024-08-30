import { Button, Box, Stack, Typography, Divider } from '@mui/material';
import { TextField } from '@mui/material';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { styled } from '@mui/material/styles';

const theme = createTheme({
  spacing : 20,
  palette : {
    mode: 'dark',
  },
});

const MyStack = styled(Stack)(({theme}) => ({
  margin: theme.spacing(1),
  flexDirection: 'row',
  gap: theme.spacing(2),
}));

export const Work05 = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <MyStack>
      <Button variant="text" color="primary">クリック</Button>
      <Button variant="contained" color="primary">クリック</Button>
      <Button variant="outlined" color="primary">クリック</Button>
    </MyStack>
    <MyStack>
      <Button variant="contained" color="secondary">クリック</Button>
      <Button variant="contained" color="success">クリック</Button>
      <Button variant="contained" color="warning">クリック</Button>
      <Button variant="contained" color="error">クリック</Button>
    </MyStack>
    <MyStack>
      <TextField variant="outlined" label="Outlined" />
      <TextField variant="filled" label="Filled" />
      <TextField variant="standard" label="Standard" />
    </MyStack>
    <MyStack>
      <TextField variant="outlined" label="secondary" color="secondary" />
      <TextField variant="outlined" label="success" color="success" />
      <TextField variant="outlined" label="warning" color="warning" />
      <TextField variant="outlined" label="error" color="error" />
    </MyStack>
  </ThemeProvider>
);
