import { Button, Box, Stack, Typography, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

const RedBox = styled(Box)(() => ({
  padding: '10px',
  backgroundColor: 'pink',
  textAlign:'center',
  color: 'red',
  flex: 1,
}));

const OrangeBox = styled(Box)(() => ({
  padding: '10px',
  backgroundColor: 'khaki',
  textAlign:'center',
  color: 'orange',
  flex: 1,
}));

const MelonBox = styled(Box)(() => ({
  padding: '10px',
  backgroundColor: 'PaleGreen',
  textAlign:'center',
  color: 'Green',
  flex: 1,
}));

export const Work02 = () => (
  <Stack direction="row">
    <RedBox>Apple</RedBox>
    <OrangeBox>Orange</OrangeBox>
    <MelonBox>Melon</MelonBox>
  </Stack>
);
