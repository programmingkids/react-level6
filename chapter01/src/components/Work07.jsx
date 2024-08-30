import { Button, Stack } from '@mui/material';
import { Paper } from '@mui/material';
import { Divider } from '@mui/material';

import { styled } from '@mui/material/styles';

const MyStack = styled(Stack)(({ theme }) => ({
  margin: theme.spacing(2),
  display: 'flex',
  flexDirection: 'row',
  justifyContent : 'center',
  alignItems : 'center',
  gap : theme.spacing(2),
  '& :not(style)': {
    padding: theme.spacing(5),
  }
}));

export const Work07 = () => (
  <>
    <MyStack>
      <Paper elevation={2}>Apple</Paper>
      <Paper elevation={4}>Orange</Paper>
      <Paper elevation={16}>Melon</Paper>
    </MyStack>
    <Divider sx={{m:2}} />
    <MyStack>
      <Paper variant="elevation" elevation={6}>Apple</Paper>
      <Paper variant="outlined">Orange</Paper>
      <Paper variant="elevation" elevation={6} square>Melon</Paper>
    </MyStack>
    <Divider sx={{m:2}} />
    <MyStack>
      <Paper variant="outlined" sx={{backgroundColor:"red"}}>Apple</Paper>
      <Paper variant="outlined" sx={{backgroundColor:"orange"}}>Orange</Paper>
      <Paper variant="outlined" sx={{backgroundColor:"cyan"}}>Melon</Paper>
    </MyStack>
  </>
);
