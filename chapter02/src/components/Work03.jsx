import { Button, Box, Stack, Typogpraphy, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Work03 = () => (
  <>
    <Stack>
      <Box sx={{m:2, p:2, bgcolor:'red'}}>Apple</Box>
      <Box sx={{m:2, p:2, bgcolor:'orange'}}>Orange</Box>
      <Box sx={{m:2, p:2, bgcolor:'PaleGreen'}}>Melon</Box>
    </Stack>
    <Stack>
      <Box sx={{border:'4px solid red', m:2, p:2}}>Apple</Box>
      <Box sx={{border:'4px solid orange', m:2, p:2}}>Orange</Box>
      <Box sx={{border:'4px solid PaleGreen', m:2, p:2}}>Melon</Box>
    </Stack>
  </>
);
