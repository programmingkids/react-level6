import { Typography } from '@mui/material';
import { Divider } from '@mui/material';

export const Work03 = () => (
  <>
    <Typography variant="h1">h1こんにちは</Typography>
    <Typography variant="h2">h2こんにちは</Typography>
    <Typography variant="h3">h3こんにちは</Typography>
    <Typography variant="h4">h4こんにちは</Typography>
    <Typography variant="h5">h5こんにちは</Typography>
    <Divider />
    <Typography variant="h3" component="h1">h1こんにちは</Typography>
    <Typography variant="h4" component="h1">h1こんにちは</Typography>
    <Typography variant="h5" component="h1">h1こんにちは</Typography>
  </>
);
