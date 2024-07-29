import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Component = ({ desc, children, img="https://placehold.co/400" }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card raised={true} sx={{ minHeight: 250, padding: 2, margin: 1}}>
      <Grid container>
        <Grid xs={10}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardHeader
              sx={{ flex: '3 0 auto' }}
              title={desc}
            />
            <CardActions disableSpacing>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                {children}
              </CardContent>
            </Collapse>
          </Box>
        </Grid>
        <Grid xs={2}>
          <CardMedia
            component="img"
            image={img}
            onClick={handleExpandClick}
            sx={{ width: 151 }}
          />
        </Grid>
      </Grid>
    </Card>
  );
}

export default Component;
