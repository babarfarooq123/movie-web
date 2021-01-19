import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography'
import { fade, makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link} from "react-router-dom";
import Switch from '@material-ui/core/Switch';
import Divider from "@material-ui/core/Divider";

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
    showsettings:{
        display:'flex',
        justifyContent:'space-between',
        padding: 10,
    }
  }));

export default function Setting() {
    const classes = useStyles();
  

      const [state1, setState1] = React.useState({
        checkedA: true,
        checkedB: true,
      });
    
      const handleChange1 = (event) => {
        setState1({ ...state1, [event.target.name]: event.target.checked });
      };

      const [state2, setState2] = React.useState({
        checkedA: true,
        checkedB: true,
      });
    
      const handleChange2 = (event) => {
        setState2({ ...state2, [event.target.name]: event.target.checked });
      };


      const [state3, setState3] = React.useState({
        checkedA: true,
        checkedB: true,
      });
    
      const handleChange3 = (event) => {
        setState3({ ...state3, [event.target.name]: event.target.checked });
      };

      const [state4, setState4] = React.useState({
        checkedA: true,
        checkedB: true,
      });
    
      const handleChange4 = (event) => {
        setState4({ ...state4, [event.target.name]: event.target.checked });
      };

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
                            <Typography variant="h6" className={classes.title}>
      Settings
    </Typography>
                        </Toolbar>
                        </AppBar>
            </div>



            <div className={classes.showsettings}>
                <div><p>Alert for new episodes</p></div>
                        <div> <Switch
                checked={state3.checkedB}
                onChange={handleChange3}
                color="primary"
                name="checkedB"
                inputProps={{ 'aria-label': 'primary checkbox' }}
                /></div>
            </div>
            <div className={classes.showsettings}>
                <div><p>test</p></div>
                        <div> <Switch
                checked={state1.checkedB}
                onChange={handleChange1}
                color="primary"
                name="checkedB"
                inputProps={{ 'aria-label': 'primary checkbox' }}
                /></div>
            </div>
            <Divider />
            
            <div className={classes.showsettings}>
                <div><p>test</p></div>
                        <div> <Switch
                checked={state2.checkedB}
                onChange={handleChange2}
                color="primary"
                name="checkedB"
                inputProps={{ 'aria-label': 'primary checkbox' }}
                /></div>
            </div>
            <div className={classes.showsettings}>
                <div><p>test</p></div>
                        <div> <Switch
                checked={state4.checkedB}
                onChange={handleChange4}
                color="primary"
                name="checkedB"
                inputProps={{ 'aria-label': 'primary checkbox' }}
                /></div>
            </div>
            <Divider />
            

        </div>
    )
}
