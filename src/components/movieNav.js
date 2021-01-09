import React from 'react'
import "./assets/css/movieNav.css";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Divider } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CommentIcon from '@material-ui/icons/Comment';
import {Link} from "react-router-dom"
import ReactDOM from 'react-dom';
import ReactSwipeNavigation from 'react-swipe-navigation'
import MovieBody from "../components/movieBody"

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
           
            
            
            {/* <Divider className={classes.divider} /> */}
            {/* 2nd nav */}
                {/* <List className={classes.secNavList}>
                    <ListItem className={classes.secNavListItem}>
                        <ListItemText className={news[0]?classes.secNavText:''} onClick={()=>{
                            news[1](true)
                            episode[1](false)
                            characters[1](false)
                            stats[1](false)
                            
                            }}  primary="The news" />
                        <ListItemText className={episode[0]?classes.secNavText:''} onClick={()=>{
                            news[1](false)
                            episode[1](true)
                            characters[1](false)
                            stats[1](false)
                            
                            }} primary="Episodes" />
                        <ListItemText styles={{fontSize: 10}} className={stats[0]?classes.secNavText:''} 
                        onClick={()=>{
                            news[1](false)
                            episode[1](false)
                            characters[1](false)
                            stats[1](true)
                            
                            }} primary="Statistics" />
                        <ListItemText className={characters[0]?classes.secNavText:''} onClick={()=>{
                            news[1](false)
                            episode[1](false)
                            characters[1](true)
                            stats[1](false)
                            
                            }}  primary="Charaters and crew" />
                    </ListItem>
                    
                </List> */}

             </AppBar>
             
             <ReactSwipeNavigation menu={ ['The News', 'Episode', 'Characters', 'statistics'] } >
                <div>

                     <section>
                         <MovieBody />
                     </section>

                </div>
                <div></div>
                <div>
                {news[1](false)}   
                     {episode[1](false)}
                     {characters[1](true)}
                     {stats[1](false)}
                </div>
                <div>
                {news[1](false)}   
                     {episode[1](false)}
                     {characters[1](false)}
                     {stats[1](true)}
                </div>
            </ReactSwipeNavigation>
            






             </div>
            </div>
    
    )
}
