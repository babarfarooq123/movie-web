import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import '../components/assets/css/news.css';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    maxHeight: '450px',
    justifyContent: 'space-between',
    paddingLeft: '10px',
    paddingRight: '10px',
    marginTop: '10px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    // maxHeight: '300px',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();


  return (
    <Card className="root">
    <CardMedia
    className="cover"
    image="https://cdn.myanimelist.net/images/voiceactors/1/54593.jpg"
    title="Live from space album cover"
  />
  <div className={classes.details}>
    <CardContent className="content">
      <div>
        <Typography component="h5" variant="h5">
          {/* Live From Space */}
        </Typography>
        <Typography variant="h5" color="textDark">
          Texter texter texter
        </Typography>
        <p>lorem text lorem text lorem text lorem text lorem text lorem text</p>
      </div>

      <div className="newsBtn">
        <p>Almazeed</p>
        <Link to="/newsclick" style={{textDecoration:'none',color:'black'}}><p>texter</p></Link>
      </div>
    </CardContent>
  </div>
  
</Card>
  );
}
