import React,{useState} from 'react'
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
    rootDark:{ 
        backgroundColor: '#1b222a',
        color: 'white',
    },
    root: {
    
    //   maxWidth: 360,
      backgroundColor: 'white',
        color: 'black',
        // border:'1px solid'
        // borderLeft: '1px solid grey',
        // borderRight: '1px solid grey',
        // borderTop: '0px solid grey',
        // borderRight: '1px solid grey',

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

export default function MovieNav() {
    const classes = useStyles();
    let [darkMode, setDarkMode] = useState(true);

    return (
        <div className={darkMode? classes.rootDark:classes.root}>
               <div style={{backgroundColor: 'white'}}>
                <AppBar className={darkMode? classes.rootDark:classes.root} position="static">
                    <Toolbar>
                    <IconButton onClick={()=>window.history.back()} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Movie Name
                    </Typography>
                    <div>
                    <Link to="/comments" style={darkMode? {textDecoration:'none',color:'white'}:{textDecoration:'none',color:'black'}}><CommentIcon className={classes.iconPlace}/></Link>
                    <FavoriteBorderIcon className={classes.iconPlace}/>
                    </div>
                    </Toolbar>
        

             </AppBar>
             <div style={darkMode? {backgroundColor: '#182128'}:{backgroundColor: '#FAFAFA'}}>
             <ReactSwipeNavigation className={darkMode?'menu-item':''} styles={darkMode? "menu-1":"menu"} menu={ ['The News', 'Episode','statistics','Characters'] } >
                <div>

                     <section style={{marginTop:4}}>
                         <MovieBody darkMode={darkMode}/>
                     </section>

                </div>
                <div style={{backgroundColor: '#FAFAFA'}}>
                        <section style={{marginTop:4}}>
                            <Episode darkMode={darkMode} />
                        </section>
                </div>
                <div>
                        <section>
                            <Statistics darkMode={darkMode} />
                        </section>
                </div>
                <div>
                        <section>
                            <Characters darkMode={darkMode} />
                        </section>
                </div>
                </ReactSwipeNavigation>
            </div>

             </div>
            </div>
    
    )
}
