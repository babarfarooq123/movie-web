import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import "../components/assets/css/episodeClick.css";
import DiscreteSlider from '../components/episodeSlid';
import KeyboardArrowLeftOutlinedIcon from '@material-ui/icons/KeyboardArrowLeftOutlined';
import MessageIcon from '@material-ui/icons/Message';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Button from '@material-ui/core/Button';

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
    }
      
}));

function Episodeclick() {
    const classes = useStyles();
    let arr = [1,2,3,4,5];

    return(
        <div>
            <AppBar className={classes.root1} position="static">
                <Toolbar className={classes.root1}>
                    <Link className={classes.link}to="/"><IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <ArrowBackIcon />
                    </IconButton></Link>
                    <Typography variant="h6" className={classes.title}>
                        2 : Episode
                    </Typography>
                    <div className="leftNav">
                        {/* <CommentIcon className={classes.iconPlace}/> */}
                        <Link to="/" style={{textDecoration:'none',color:'black'}}><div className="leftNav-arrow"><KeyboardArrowLeftOutlinedIcon /></div></Link>
                        <Link to="/comments" style={{textDecoration:'none',color:'black'}}><MessageIcon /></Link>
                    </div>
                </Toolbar>
            </AppBar>

            <section className="sliderCss1">
                <p>(Person 6880) yes 9.64/10</p>
                
                <Typography variant="h6" className={classes.title}>
                    Text text
                </Typography>
                <DiscreteSlider />


            </section>

            <section className="sliderCss">
                {
                    arr.map((val, ind) => {
                        return <div key={ind} className="episodeClick-link">
                            <div><ErrorOutlineIcon /></div>
                            <div>
                                <p>Text : text</p>
                            </div>
                            <div>
                            <Button variant="contained" className="episodeBtn" color="primary">
                                Texter
                            </Button>
                            </div>
                        </div>
                    })
                }

            </section>
        </div>
    );
}

export default Episodeclick;