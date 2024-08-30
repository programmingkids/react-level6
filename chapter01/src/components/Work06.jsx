import { Button, Stack } from '@mui/material';
import { Box } from '@mui/material';
import { Divider } from '@mui/material';

export const Work06 = () => (
  <>
    <Stack>
      <Box backgroundColor="red" color="white" p={2} textAlign="center">Apple</Box>
      <Box backgroundColor="orange" color="white" p={2} textAlign="center">Orange</Box>
      <Box backgroundColor="PaleGreen" color="black" p={2} textAlign="center">Melon</Box>
    </Stack>
    <Divider sx={{m:2}} />
    <Stack direction="row">
      <Box backgroundColor="red" color="white" p={2} textAlign="center">English</Box>
      <Box backgroundColor="blue" color="white" p={2} textAlign="center">Math</Box>
      <Box backgroundColor="purple" color="white" p={2} textAlign="center">History</Box>
    </Stack>
    <Divider sx={{m:2}} />
    <Stack direction="row" justifyContent="center">
      <Box backgroundColor="red" color="white" p={2} textAlign="center">English</Box>
      <Box backgroundColor="blue" color="white" p={2} textAlign="center">Math</Box>
      <Box backgroundColor="purple" color="white" p={2} textAlign="center">History</Box>
    </Stack>
    <Divider sx={{m:2}} />
    <Stack direction="row" justifyContent="end">
      <Box backgroundColor="red" color="white" p={2} textAlign="center">English</Box>
      <Box backgroundColor="blue" color="white" p={2} textAlign="center">Math</Box>
      <Box backgroundColor="purple" color="white" p={2} textAlign="center">History</Box>
    </Stack>
  </>
);
