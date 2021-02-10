import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import MediaControlCard from '../components/newsBody'
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
import SettingsIcon from '@material-ui/icons/Settings';
import MenuIcon from '@material-ui/icons/Menu';
import ListIcon from '@material-ui/icons/List';
import clsx from 'clsx';

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

function News() {
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

    return(
        <div>
            <AppBar className={classes.root1} position="static">
                <Toolbar className={classes.root1}>
                    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> */}
                        {/* <ArrowBackIcon /> */}
                        <div style={{marginRight:10}}>
                    <MenuIcon onClick={toggleDrawer('left', true)} className={classes.iconColor}/>
                    <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                      {list('left')}
                    </Drawer>
                </div>
                    {/* </IconButton> */}
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