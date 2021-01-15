import React from 'react'
import "./assets/css/movieNav.css";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CommentIcon from '@material-ui/icons/Comment';
import {Link} from "react-router-dom"
import ReactSwipeNavigation from 'react-swipe-navigation'
import MovieBody from "../components/movieBody"
import Episode from "../components/Episode"
import Statistics from "../components/statistics"
import Characters from "../components/characters"

const useStyles = makeStyles((theme) => ({
    root: {
    
    //   maxWidth: 360,
      backgroundColor: 'white',
        color: 'black'
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
      
     
}));

export default function MovieNav({news,episode,stats,characters}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
               <div>
                <AppBar className={classes.root} position="static">
                    <Toolbar>
                    <Link className={classes.link}to="/"><IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <ArrowBackIcon />
                    </IconButton></Link>
                    <Typography variant="h6" className={classes.title}>
                        Movie Name
                    </Typography>
                    <div>
                    <CommentIcon className={classes.iconPlace}/>
                    <FavoriteBorderIcon className={classes.iconPlace}/>
                    </div>
                    </Toolbar>
        

             </AppBar>
             
             <ReactSwipeNavigation menu={ ['The News', 'Episode','statistics','Characters'] } >
                <div>

                     <section>
                         <MovieBody />
                     </section>

                </div>
                <div>
                        <section>
                            <Episode />
                        </section>
                </div>
                <div>
                        <section>
                            <Statistics />
                        </section>
                </div>
                <div>
                        <section>
                            <Characters />
                        </section>
                </div>
            </ReactSwipeNavigation>
        

             </div>
            </div>
    
    )
}
