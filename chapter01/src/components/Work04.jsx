import { Button, Stack } from '@mui/material';
import { TextField } from '@mui/material';
import { Divider } from '@mui/material';

import { styled } from '@mui/material/styles';

const MyStack = styled(Stack)(({ theme }) => ({
  margin: theme.spacing(2),
  display: 'flex',
  flexDirection: 'row',
  justifyContent : 'center',
  alignItems : 'center',
  gap : theme.spacing(2),
}));

export const Work04 = () => (
  <>
    <MyStack>
      <TextField variant="outlined" label="Outlined" />
      <TextField variant="filled" label="Filled" />
      <TextField variant="standard" label="Standard" />
    </MyStack>
    <Divider />
    <MyStack>
      <TextField variant="outlined" label="secondary" color="secondary" />
      <TextField variant="outlined" label="success" color="success" />
      <TextField variant="outlined" label="warning" color="warning" />
    </MyStack>
    <Divider />
    <MyStack>
      <TextField fullWidth label="fullWidth" />
    </MyStack>
  </>
);
