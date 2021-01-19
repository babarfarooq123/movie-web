import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import "../components/assets/css/episodeChat.css";
import FilterListIcon from '@material-ui/icons/FilterList';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import FlagIcon from '@material-ui/icons/Flag';
import MessageIcon from '@material-ui/icons/Message';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
    root: {
    
    //   maxWidth: 360,
      backgroundColor: 'white',
        color: 'black',
        // boxShadow: '0 4px 2px -2px gray',
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


function Chat() {
    const classes = useStyles();
    let c = [1,2,3,4,5];
    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedF: false,
        checkedG: false,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

    return(
        <div className="mainChat">
            <AppBar className={classes.root} position="static">
                <Toolbar>
                    <Link className={classes.link}to="/"><IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <ArrowBackIcon />
                    </IconButton></Link>
                    <Typography variant="h6" className={classes.title}>
                        Comments
                    </Typography>
                    <div>
                        {/* <CommentIcon className={classes.iconPlace}/> */}
                        <FilterListIcon />
                    </div>
                </Toolbar>
            </AppBar>

            <div className="chatMain">
                {
                    c.map((val, ind) => {
                        return <div key={ind} className="mainChar-div">
                            <div className="chatMain-div1">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCuZdIsxp2skAKPF6A5SXTWhhUH8hqbcUD_g&usqp=CAU" alt="profile" className="chatMain-img" />
                                <p>Text text</p>
                            </div>
                            <div>
                                lorem text lorem text lorem text lorem text lorem text lorem text
                            </div>
                            <div className="chatMain-div3">
                                <ThumbUpIcon /><span className="chatMain-span"> 0 </span>
                                <ThumbDownAltIcon /><span className="chatMain-span"> 0 </span>
                                <FlagIcon /><span className="chatMain-span"> 0 </span>
                                <MessageIcon /><span className="chatMain-span"> 0 </span>
                            </div>
                            <br />
                        </div>
                    })
                }
            </div>
            <div className="chatInp">
                <div className="chatInp-div1">
                    <p>Text text</p>
                    <input className="chatInp-div1-inp" />
                    <p>0/500</p>
                </div>
                <hr style={{borderTop: '1px dashed #5887FA'}} />
                <div className="chatInp-div2">
                    <div className="chatInp-div2-left">
                        <FormControlLabel control={
                            <Checkbox
                                checked={state.checkedB}
                                onChange={handleChange}
                                name="checkedB"
                                color="primary" />
                            }
                            // label="Primary"
                        />
                        <p>Text text</p>
                    </div>
                    <div>
                        <SendIcon style={{color: '#5887FA'}} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;