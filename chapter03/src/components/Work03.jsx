import { Button, Box, Stack, Typography, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

const CommonBox = styled(Box)(() => ({
  padding: '10px',
  textAlign:'center',
  flex: 1,
}));

const RedBox = styled(CommonBox)(() => ({
  backgroundColor: 'pink',
  color: 'red',
}));

const OrangeBox = styled(CommonBox)(() => ({
  backgroundColor: 'khaki',
  color: 'orange',
}));

const MelonBox = styled(CommonBox)(() => ({
  backgroundColor: 'PaleGreen',
  color: 'Green',
}));

export const Work03 = () => (
  <Stack direction="row">
    <RedBox>Apple</RedBox>
    <OrangeBox>Orange</OrangeBox>
    <MelonBox>Melon</MelonBox>
  </Stack>
);
