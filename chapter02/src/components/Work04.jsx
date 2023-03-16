import { Button, Box, Stack, Typography, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Work04 = () => (
  <>
    <Stack 
      direction="row" 
      sx={{
        m:2, 
        gap:2, 
        alignItems:'center', 
        height: 200,
        bgcolor: '#cecece',
        p:2,
      }}
    >
      <Box sx={{
          width: 100, height: 100, bgcolor:'red'
        }}>Apple</Box>
      <Box sx={{
        width: 100, height: 150, bgcolor:'orange'
      }}>Orange</Box>
      <Box sx={{
        width: 100, height: 200, bgcolor:'PaleGreen'
      }}>Melon</Box>
    </Stack>
    <Stack>
    </Stack>
  </>
);
