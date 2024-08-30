import { Button, Box, Stack, Typography, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

const RedBox = styled('div')(() => ({
  padding: '5px',
  border: '4px solid red',
  backgroundColor: 'pink',
  width: '200px',
  height: '200px',
  textAlign:'center',
  lineHeight: '200px',
  color: 'red',
}));

const OrangeBox = styled('div')(() => ({
  padding: '5px',
  border: '4px solid orange',
  backgroundColor: 'khaki',
  width: '200px',
  height: '200px',
  textAlign:'center',
  lineHeight: '200px',
  color: 'orange',
}));

export const Work01 = () => (
  <Stack direction="row" justifyContent="center" gap={4} m={2}>
    <RedBox>Apple</RedBox>
    <OrangeBox>Orange</OrangeBox>
  </Stack>
);
