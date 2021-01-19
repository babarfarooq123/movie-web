import React from 'react'
import facebookLogo from "../components/assets/images/facebook.png"
import twitterLogo from "../components/assets/images/twitter.png"
import googleLogo from "../components/assets/images/google.png"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { fade, makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root1: {
      flexGrow: 1,
      backgroundColor: 'white',
      color:'black',
      boxShadow:'0px 0px 4px rgba(0,0,0,0.5)'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
    showLogos:{
        height:'80vh',
        display:'flex',
        justifyContent:'center',
        alignItems: 'center'
    
    }
  }));

export default function LoginDetails() {
    const classes = useStyles();
        return (
            <div>
                <div className={classes.root1}>
                <AppBar className={classes.root1} position="static">
                <Toolbar>
                    <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                    >
                    <Link to="/" style={{textDecoration:'none'}} >
                    <ArrowBackIcon  />
                    </Link>
                    </IconButton>
                </Toolbar>
                </AppBar>

            </div>


            <div className={classes.showLogos}>

                <img src={facebookLogo} style={{marginRight:10}} alt="facebook"/>
                <img src={twitterLogo} style={{marginRight:10}} alt="twitter" />
                <img src={googleLogo} style={{marginRight:10}} alt="google"/>
            </div>    

          </div>
    )
}
