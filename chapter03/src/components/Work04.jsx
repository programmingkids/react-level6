import { Button, Box, Stack, Typography, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

const CommonBottun = styled(Button)(() => ({
  padding: '10px 40px',
}));

const RedButton = styled(CommonBottun)(() => ({
  backgroundColor: 'pink',
  border: '4px solid red',
  color: 'red',
}));

const OrangeButton = styled(CommonBottun)(() => ({
  backgroundColor: 'khaki',
  border: '4px solid orange',
  color: 'orange',
}));

const MelonButton = styled(CommonBottun)(() => ({
  backgroundColor: 'PaleGreen',
  border: '4px solid Green',
  color: 'Green',
}));

export const Work04 = () => (
  <Stack direction="row" justifyContent="center" gap={2} m={2}>
    <RedButton>Apple</RedButton>
    <OrangeButton>Orange</OrangeButton>
    <MelonButton>Melon</MelonButton>
  </Stack>
);
