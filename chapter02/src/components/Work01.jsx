import { Button, Box, Stack, Typography, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Work01 = () => (
  <>
    <Stack marginBottom={2}>
      <Box padding={2} backgroundColor="red">Apple</Box>
      <Box p={2} backgroundColor="orange">Orange</Box>
    </Stack>
    <Stack marginBottom={2}>
      <Box sx={{
        padding: 2,
        backgroundColor:'red',
      }}
      >Apple</Box>
      <Box sx={{
        p: 2,
        bgcolor:'orange'
      }}
      >Orange</Box>
    </Stack>
  </>
);
