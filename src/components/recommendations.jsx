import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import "../components/assets/css/recommendation.css"
import MenuIcon from '@material-ui/icons/Menu';
import ListIcon from '@material-ui/icons/List';
import clsx from 'clsx';
import SettingsIcon from '@material-ui/icons/Settings';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import AssessmentIcon from '@material-ui/icons/Assessment';
import FavoriteIcon from '@material-ui/icons/Favorite';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import GetAppIcon from '@material-ui/icons/GetApp';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import ExtensionIcon from '@material-ui/icons/Extension';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import ChromeReaderModeOutlinedIcon from '@material-ui/icons/ChromeReaderModeOutlined';



import {Link} from "react-router-dom"
const useStyles = makeStyles((theme) => ({
    root1: {
      flexGrow: 1,
      backgroundColor: 'white',
      color: 'black',
      boxShadow:'0px 0px 4px rgba(0,0,0,0.5)',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    background:{
        backgroundColor:'#f6f6f6',
    },
    shuffle1:{
        marginTop: 20,
        padding:10,
        flex:1,
        backgroundColor: 'white',
        display:'flex',
        justifyContent:'space-around',
        alignContent:'center',
        alignItems:'center',
    },
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    }, profileImg: {
        fontSize: '60px'
      },
    iconColor1:{
        color:'black',
        marginRight:20
    }
  }));
  

export default function Recommendations() {
    const classes = useStyles();

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
  
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
  
          <List>
            <ListItem>
              <ListItemIcon><AccountCircleIcon className={classes.profileImg} /></ListItemIcon>
            </ListItem>
            <ListItem>
            <Link  to="/login" style={{textDecoration:'none',color:'black'}}><ListItemText primary='Click here to login' /></Link>
            </ListItem>
          </List>
          <List>
            {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => ( */}
              <ListItem button>
                {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                <Link to="/"  style={{textDecoration:'none',color:'black',display:'flex',justifyContent:'space-between'}}>
                <ListItemIcon><WhatshotIcon /></ListItemIcon>
                <ListItemText primary='Latest updates' />
                </Link>
              </ListItem>
              <ListItem button>
                <Link to="/"  style={{textDecoration:'none',color:'black',display:'flex',justifyContent:'space-between'}}>
                <ListItemIcon><ListIcon className={classes.iconColor}/></ListItemIcon>
                <ListItemText primary='Anime list' />
                </Link>
              </ListItem>
            {/* ))} */}
          </List>
          <Divider />
            <List>
              {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => ( */}
                <ListItem button>
                  {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                  <Link to="/" style={{textDecoration:'none',color:'black',display:'flex',justifyContent:'space-between'}}>
                  <ListItemIcon><AssessmentIcon /></ListItemIcon>
                  <ListItemText primary='Global assessment' />
                  </Link>
                </ListItem>
                <ListItem button>
                  <Link to="/"  style={{textDecoration:'none',color:'black',display:'flex',justifyContent:'space-between'}}>
                  <ListItemIcon><AssessmentIcon /></ListItemIcon>
                  <ListItemText primary='My list' />
                  </Link>
                </ListItem>
              {/* ))} */}
            </List>
          <Divider />
          <List>
            {/* {['All mail', 'Trash', 'Spam'].map((text, index) => ( */}
              <ListItem button>
                <Link to="/login"  style={{textDecoration:'none',color:'black',display:'flex',justifyContent:'space-between'}} >
                <ListItemIcon><AssessmentIcon /></ListItemIcon>
                  <ListItemText primary='My favourite charecters' /></Link>
              </ListItem>
              <ListItem button>
                <Link to="/login"  style={{textDecoration:'none',color:'black',display:'flex',justifyContent:'space-between'}}>
                <ListItemIcon><FavoriteIcon /></ListItemIcon>
                  <ListItemText primary='Latest views' /></Link>
              </ListItem>
              <ListItem button>
                <Link to="/login"  style={{textDecoration:'none',color:'black',display:'flex',justifyContent:'space-between'}}>
                <ListItemIcon><FavoriteIcon /></ListItemIcon>
                  <ListItemText primary='My downloads' /></Link>
              </ListItem>
              <ListItem button>
                <Link to="/login"  style={{textDecoration:'none',color:'black',display:'flex',justifyContent:'space-between'}}>
                <ListItemIcon><QueryBuilderIcon /></ListItemIcon>
                  <ListItemText primary='Latest views' /></Link>
              </ListItem>
              <ListItem button>
                <ListItemIcon><GetAppIcon /></ListItemIcon>
                <ListItemText primary='My Downloads' />
              </ListItem>
            {/* ))} */}
          </List>
          <Divider />
          <List>
              <ListItem button>
                <Link to="/popular"  style={{textDecoration:'none',color:'black',display:'flex',justifyContent:'space-between'}}>
                <ListItemIcon><SignalCellularAltIcon /></ListItemIcon>
                  <ListItemText primary='The most popular character' /></Link>
              </ListItem>
              <ListItem button>
               <Link to="/recommendation"  style={{textDecoration:'none',color:'black',display:'flex',justifyContent:'space-between'}}>
                <ListItemIcon><ExtensionIcon /></ListItemIcon>
                 <ListItemText primary='Recommendations' /></Link>
              </ListItem>
              
              <ListItem button>
                <Link to="/episode"  style={{textDecoration:'none',color:'black',display:'flex',justifyContent:'space-between'}}>
                <ListItemIcon><InsertInvitationIcon /></ListItemIcon>
                  <ListItemText primary='Dates of episodes' /></Link>
              </ListItem>
              <ListItem button>
                <Link  to="/news"  style={{textDecoration:'none',color:'black',display:'flex',justifyContent:'space-between'}}>
                <ListItemIcon><ChromeReaderModeOutlinedIcon /></ListItemIcon>
                  <ListItemText primary='News' /></Link>
              </ListItem>
          </List>
          <Divider />
          <List>
              <ListItem button>
                <Link  to="/settings"  style={{textDecoration:'none',color:'black',display:'flex',justifyContent:'space-between'}}>
                <ListItemIcon><SettingsIcon /></ListItemIcon>
                  <ListItemText primary='Settings' /></Link>
              </ListItem>
          </List>
        </div>
     );
    
    return (
        <div className={classes.background}>
            <div className={classes.root1}>
                <AppBar className={classes.root1} position="static">
                    <Toolbar>
                    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> */}
                    <div>
                    <MenuIcon onClick={toggleDrawer('left', true)} className={classes.iconColor1}/>
                    <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                      {list('left')}
                    </Drawer>
                </div>
                    {/* </IconButton> */}
                    <Typography variant="h6" className={classes.title}>
                        Recommendations
                    </Typography>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <AddIcon />
                    </IconButton>
                    </Toolbar>
                </AppBar>
                </div>
                <div className="main-shuffle">
                    <div className="shuffle1">
                    <Link style={{textDecoration:'none',color:'black'}} to="/movies">
                        <div>
                            <p>Sometext</p>
                        <img className="poster-images" src="https://media.kitsu.io/anime/poster_images/2/medium.jpg?1597696808" alt="somepicture"/>
                        <p style={{color:'blue'}}>The movie</p>                   
                        </div>
                        </Link>
                        <ShuffleIcon />
                        <Link style={{textDecoration:'none',color:'black'}} to="/movies">
                        <div>
                            <p>Sometext</p>
                        <img className="poster-images" src="https://media.kitsu.io/anime/poster_images/2/medium.jpg?1597696808" alt="somepicture"/>
                        <p style={{color:'blue'}}>The movie</p>                   
                        </div>
                        </Link>    
                    </div>
                    <h6 style={{textAlign:'left'}}>this is some review by some one ......</h6>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                    <Link to="/showrecommendation" style={{textDecoration:'none',color:'blue'}}><p style={{textAlign:'left'}}>More..</p></Link>
                    <Link to="/profile" style={{textDecoration:'none',color:'blue'}}><p style={{textAlign:'right'}}>My name </p></Link>
                    </div>
                </div>
                
                <div className="main-shuffle">
                    <div className="shuffle1">
                    <Link style={{textDecoration:'none',color:'black'}} to="/movies">
                        <div>
                            <p>Sometext</p>
                        <img className="poster-images" src="https://media.kitsu.io/anime/poster_images/2/medium.jpg?1597696808" alt="somepicture"/>
                        <p style={{color:'blue'}}>The movie</p>                   
                        </div>
                        </Link>
                        <ShuffleIcon />
                        <Link style={{textDecoration:'none',color:'black'}} to="/movies">
                        <div>
                            <p>Sometext</p>
                        <img className="poster-images" src="https://media.kitsu.io/anime/poster_images/2/medium.jpg?1597696808" alt="somepicture"/>
                        <p style={{color:'blue'}}>The movie</p>                   
                        </div>
                        </Link>    
                    </div>
                    <h6 style={{textAlign:'left'}}>this is some review by some one ......</h6>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                    <Link to="/showrecommendation" style={{textDecoration:'none',color:'blue'}}><p style={{textAlign:'left'}}>More..</p></Link>
                    <Link to="/profile" style={{textDecoration:'none',color:'blue'}}><p style={{textAlign:'right'}}>My name </p></Link>
                    </div>
                </div>
                <div className="main-shuffle">
                    <div className="shuffle1">
                        <Link style={{textDecoration:'none',color:'black'}} to="/movies">
                        <div>
                            <p>Sometext</p>
                        <img className="poster-images" src="https://media.kitsu.io/anime/poster_images/2/medium.jpg?1597696808" alt="somepicture"/>
                        <p style={{color:'blue'}}>The movie</p>                   
                        </div>
                        </Link>
                        <ShuffleIcon />
                        <Link style={{textDecoration:'none',color:'black'}} to="/movies">
                        <div>
                            <p>Sometext</p>
                        <img className="poster-images" src="https://media.kitsu.io/anime/poster_images/2/medium.jpg?1597696808" alt="somepicture"/>
                        <p style={{color:'blue'}}>The movie</p>                   
                        </div>
                        </Link> 
                    </div>
                    <h6 style={{textAlign:'left'}}>this is some review by some one ......</h6>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                    <Link to="/showrecommendation" style={{textDecoration:'none',color:'blue'}}><p style={{textAlign:'left'}}>More..</p></Link>
                    <Link to="/profile" style={{textDecoration:'none',color:'blue'}}><p style={{textAlign:'right'}}>My name </p></Link>
                    </div>
                </div>


        </div>
    )
}
