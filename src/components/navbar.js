import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ListIcon from '@material-ui/icons/List';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
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

const useStyles = makeStyles((theme) => ({
    root: {
    backgroundColor: 'white',
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(1),
    },
    title: {
      flexGrow: 1,
      color: 'black',
    },
    iconColor:{
        color: 'black',
        marginRight: 10,
    },
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    profileImg: {
      fontSize: '60px'
    }
  }));

export default function Navbar() {
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
            <ListItemText primary='Click here to login' />
          </ListItem>
        </List>
        <List>
          {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => ( */}
            <ListItem button>
              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
              <ListItemIcon><WhatshotIcon /></ListItemIcon>
              <ListItemText primary='Latest updates' />
            </ListItem>
            <ListItem button>
              <ListItemIcon><ListIcon className={classes.iconColor}/></ListItemIcon>
              <ListItemText primary='Anime list' />
            </ListItem>
          {/* ))} */}
        </List>
        <Divider />
          <List>
            {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => ( */}
              <ListItem button>
                {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                <ListItemIcon><AssessmentIcon /></ListItemIcon>
                <ListItemText primary='Global assessment' />
              </ListItem>
              <ListItem button>
                <ListItemIcon><AssessmentIcon /></ListItemIcon>
                <ListItemText primary='My list' />
              </ListItem>
            {/* ))} */}
          </List>
        <Divider />
        <List>
          {/* {['All mail', 'Trash', 'Spam'].map((text, index) => ( */}
            <ListItem button>
              <ListItemIcon><AssessmentIcon /></ListItemIcon>
              <ListItemText primary='My favourite charecters' />
            </ListItem>
            <ListItem button>
              <ListItemIcon><FavoriteIcon /></ListItemIcon>
              <ListItemText primary='Latest views' />
            </ListItem>
            <ListItem button>
              <ListItemIcon><FavoriteIcon /></ListItemIcon>
              <ListItemText primary='My downloads' />
            </ListItem>
            <ListItem button>
              <ListItemIcon><QueryBuilderIcon /></ListItemIcon>
              <ListItemText primary='Latest views' />
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
              <ListItemIcon><SignalCellularAltIcon /></ListItemIcon>
              <ListItemText primary='The most popular character' />
            </ListItem>
            <ListItem button>
              <ListItemIcon><ExtensionIcon /></ListItemIcon>
              <ListItemText primary='Recommendations' />
            </ListItem>
            <ListItem button>
              <ListItemIcon><InsertInvitationIcon /></ListItemIcon>
              <ListItemText primary='Dates of episodes' />
            </ListItem>
            <ListItem button>
              <ListItemIcon><ChromeReaderModeOutlinedIcon /></ListItemIcon>
              <ListItemText primary='News' />
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem button>
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText primary='Settings' />
            </ListItem>
        </List>
      </div>
    );

    return (
        <div className={classes.root} >
          <AppBar position="static" className={classes.root}>
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">

                <div>
                    <MenuIcon onClick={toggleDrawer('left', true)} className={classes.iconColor}/>
                    <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                      {list('left')}
                    </Drawer>
                </div>

              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Latest Update
              </Typography>
              <div>
                <SearchIcon className={classes.iconColor}/>
                <ListIcon className={classes.iconColor}/>
              </div>
            </Toolbar>
          </AppBar>
    </div>
    )
}
