import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FilterListIcon from '@material-ui/icons/FilterList';
import DetailsIcon from '@material-ui/icons/Details';
import Homebody from "../components/homebody"
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


const useStyles = makeStyles((theme) => ({
    root1: {
      flexGrow: 1,
      backgroundColor: 'white',
      color:'black',
      boxShadow:'0px 0px 4px rgba(0,0,0,0.5)',
      borderWidth:1,
      borderColor:'rgba(0,0,0,0.5)'
   
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
      justifyContent: 'space-between',
     flex:1,
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
        width: '125ch',
        '&:focus': {
          width: '125ch',
        },
      },
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

export default function Search() {
    
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleOpen1 = () => {
      setOpen1(true);
    };
  
    const handleClose1 = () => {
      setOpen1(false);
    };
  
    

    return (
      <div className={classes.root1}>
        <AppBar className={classes.root1} position="static">
          <Toolbar className={classes.root1}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={()=>window.history.back()}
            >
      
              <ArrowBackIcon  />
         
            </IconButton>
            <div className={classes.search}>
              {/* <div className={classes.searchIcon}>
                <SearchIcon />
              </div> */}
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                autoFocus={true}
              />
            </div>
            <div style={{display:'flex',justifyContent:'flex-end'}}>
              <FilterListIcon style={{marginRight:10}} onClick={handleOpen} />
              <DetailsIcon  onClick={handleOpen1}/>
            </div>
          </Toolbar>
        </AppBar>
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">some Text for heading</h2>
            <p id="transition-modal-description">
              
              <label htmlFor="some" style={{display:'flex',alignContent:'center',alignItems:'center',marginTop:10}}>
              <input type="radio" id="some" style={{marginRight:10}}/>
                :some
                </label>
                <label htmlFor="some" style={{display:'flex',alignContent:'center',alignItems:'center',marginTop:10}}>
              <input type="radio" id="some" style={{marginRight:10}}/>
                :some
                </label>
                <label htmlFor="some" style={{display:'flex',alignContent:'center',alignItems:'center',marginTop:10}}>
              <input type="radio" id="some" style={{marginRight:10}}/>
                :some
                </label>

            </p>
          </div>
        </Fade>
      </Modal>

      {/* second modal */}

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open1}
        onClose={handleClose1}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open1}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">some Text by tag?</h2>
            <p id="transition-modal-description">

            <h6 style={{textAlign:'center',fontSize:20}}>Tag1</h6>
              <div style={{display:'flex',justifyContent:'space-around',marginTop:-30}}>
                <p style={{backgroundColor:'lightgray',padding:5,borderRadius:10}}>text</p>  
                <p style={{backgroundColor:'lightgray',padding:5,borderRadius:10}}>text</p>    
                <p style={{backgroundColor:'lightgray',padding:5,borderRadius:10}}>text</p>        
              </div>  

            
            
            <h6 style={{textAlign:'center',fontSize:20}}>Tag1</h6>
              <div style={{display:'flex',justifyContent:'space-around',marginTop:-30}}>
                <p style={{backgroundColor:'lightgray',padding:5,borderRadius:10}}>text</p>  
                <p style={{backgroundColor:'lightgray',padding:5,borderRadius:10}}>text</p>    
                <p style={{backgroundColor:'lightgray',padding:5,borderRadius:10}}>text</p>        
              </div>  

            </p>


          </div>

          
        </Fade>
      </Modal>
       

        <Homebody />
        
      </div>
    )
}
