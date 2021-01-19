import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import MediaControlCard from '../components/newsBody'

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
      secNavListItem: {
          textAlign: 'center',
          cursor: 'pointer'
      },
      secNavText: {
            // marginRight: '10px',
            // marginLeft: '10px',
            borderBottom: '4px solid #50A8DE',
            fontSize: 10,
      },
      iconPlace:{
          marginRight: 13,
      },
      link:{
          color: 'black'
      },
      iconPlace1:{
          color: '#5887FA',
      },
      mainMovieImg: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
        // position: 'relative',
        // bottom: '140px',
        marginLeft: '10px',
    
    },
    detail: {
        marginLeft: '8px',
    },
    starimg: {
        color: 'yellow',
    },
    starAlign: {
        display: 'flex',
        alignItems: 'center',
    }
      
}));

function News() {
    const classes = useStyles();

    return(
        <div>
            <AppBar className={classes.root1} position="static">
                <Toolbar className={classes.root1}>
                    <Link className={classes.link} to="/"><IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <ArrowBackIcon />
                    </IconButton></Link>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                    <div>
                        {/* <CommentIcon className={classes.iconPlace}/> */}
                       <Link to="/search" style={{textDecoration:'none',color:'black'}}> <SearchIcon /></Link>
                    </div>
                </Toolbar>
            </AppBar>

            <div>
                <MediaControlCard />
            </div>
            <div>
                <MediaControlCard />
            </div>
        </div>
    );
}

export default News;