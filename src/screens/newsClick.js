import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link} from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
import '../components/assets/css/news.css';

const useStyles = makeStyles((theme) => ({
    root1: {
    
    //   maxWidth: 360,
        backgroundColor: 'white',
        color: 'black',
        boxShadow: '0px 0px 4px rgba(0,0,0,0.5)',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
    flexGrow: 1,
    },
    root: {
        display: 'flex',
        maxHeight: '450px',
        justifyContent: 'space-between',
        paddingLeft: '10px',
        paddingRight: '10px',
        marginTop: '10px',
      },
}))

function Newsclick(){
    const classes = useStyles();

    return(
        <div>
            <AppBar className={classes.root1} position="static">
                <Toolbar className={classes.root1}>
<<<<<<< HEAD
                    <Link className={classes.link} to="/"><IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <ArrowBackIcon />
                    </IconButton></Link>
=======
                   <IconButton onClick={()=>window.history.back()} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <ArrowBackIcon />
                    </IconButton>
>>>>>>> 07c8b66cc171e068d0b2eba91861bf6bf0cbafc7
                    <Typography variant="h6" className={classes.title}>
                        News click
                    </Typography>
                    {/* <div> */}
                        {/* <CommentIcon className={classes.iconPlace}/> */}
                       {/* <Link to="/search" style={{textDecoration:'none',color:'black'}}> <SearchIcon /></Link>
                    </div> */}
                </Toolbar>
            </AppBar>
            



            {/* body */}
            <Card className="root">
    <CardMedia
    className="cover1"
    image="https://cdn.myanimelist.net/images/voiceactors/1/54593.jpg"
    title="Live from space album cover"
  />
  <div className={classes.details}>
    <CardContent className="content">
      <div>
        {/* <Typography component="h5" variant="h5"> */}
          {/* Live From Space */}
        {/* </Typography> */}
        {/* <Typography variant="h5" color="textDark">
          Texter texter texter
        </Typography> */}
        <p className="text">lorem text lorem text lorem text lorem text lorem text lorem text
        lorem text lorem text lorem text lorem text lorem text lorem text
        </p>
      </div>

      <div className="newsBtn1">
        <p>Almazeed</p>
        <Link to="/newsclick" style={{textDecoration:'none',color:'black', marginLeft: 30}}><p>texter</p></Link>
      </div>
      
      {/* <p style={{margin: 'auto'}}>texttttt</p> */}
    </CardContent>
  </div>
  
  
</Card>
<p className="lastText">
  lorem text lorem text lorem text lorem text lorem text lorem text
        lorem text lorem text lorem text lorem text lorem text lorem textlorem text lorem text lorem text lorem text lorem text lorem text
        lorem text lorem text lorem text lorem text lorem text lorem text
  </p>
        </div>
    );
}

export default Newsclick;