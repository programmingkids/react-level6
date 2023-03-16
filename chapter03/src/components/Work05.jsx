import { Button, Box, Stack, Typography, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

const CommonText = styled(Typography)(() =>({
  fontSize: 30,
  color: 'blue',
}));

const MyText1 = styled(CommonText)(() => ({
  color: 'red',
}));

const MyText2 = styled(CommonText)(() => ({
  fontWeight: 'bold',
  textDecoration: 'underline',
}));

const MyText3 = styled(CommonText)(() => ({
  color: 'green',
  fontStyle: 'italic',
  textDecoration:'line-through',
}));

export const Work05 = () => (
  <Stack m={2}>
    <MyText1>Hello</MyText1>
    <MyText2>Hello</MyText2>
    <MyText3>Hello</MyText3>
  </Stack>
);
