import { Button, Box, Stack, Typography, Divider } from '@mui/material';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export const MyCard = ({image, title, subtitle, body}) => (
  <Card sx={{ width: 250 }}>
    <CardMedia sx={{ height: 100 }} image={image} title="image" />
    <CardContent>
      <Typography variant="h5" color="error.main">{title}</Typography>
      <Typography color="info.main">
        {subtitle}
      </Typography>
      <Typography variant="body1">
        {body}
      </Typography>
    </CardContent>
    <CardActions>
      <Button variant="contained" size="small" color="success">
        More
      </Button>
    </CardActions>
  </Card>
);
