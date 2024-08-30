import { Button, Stack } from '@mui/material';
import { Divider } from '@mui/material';

import { styled } from '@mui/material/styles';

const MyStack = styled(Stack)(({ theme }) => ({
  margin: theme.spacing(2),
  display: 'flex',
  flexDirection: 'row',
  justifyContent : 'center',
  alignItems : 'center',
  '& button' : {
    margin: theme.spacing(2),
  }
}));

export const Work02 = () => (
  <>
    <MyStack>
      <Button variant="text">text button</Button>
      <Button variant="contained">contained button</Button>
      <Button variant="outlined">outlined button</Button>
    </MyStack>
    <Divider />
    <MyStack>
      <Button variant="contained" color="primary">primary</Button>
      <Button variant="contained" color="secondary">secondary</Button>
      <Button variant="contained" color="success">success</Button>
    </MyStack>
    <Divider />
    <MyStack>
      <Button variant="contained" color="info" size="small">small button</Button>
      <Button variant="contained" color="warning" size="medium">medium button</Button>
      <Button variant="contained" color="error" size="large">large button</Button>
    </MyStack>
  </>
);
