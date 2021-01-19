import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import "../components/assets/css/recommendation.css"
import {Link} from "react-router-dom"
const useStyles = makeStyles((theme) => ({
    root1: {
      flexGrow: 1,
      backgroundColor: 'white',
      color: 'black',
      boxShadow:'0px 0px 4px rgba(0,0,0,0.5)'
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
    
  }));
  

export default function Recommendations() {
    const classes = useStyles();
    
    return (
        <div className={classes.background}>
            <div className={classes.root1}>
                <AppBar className={classes.root1} position="static">
                    <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <Link style={{textDecoration:'none'}} to="/">  <ArrowBackIcon /></Link>
                    </IconButton>
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
                        <p>The movie</p>                   
                        </div>
                        </Link>
                        <ShuffleIcon />
                        <Link style={{textDecoration:'none',color:'black'}} to="/movies">
                        <div>
                            <p>Sometext</p>
                        <img className="poster-images" src="https://media.kitsu.io/anime/poster_images/2/medium.jpg?1597696808" alt="somepicture"/>
                        <p>The movie</p>                   
                        </div>
                        </Link>    
                    </div>
                    <h6 style={{textAlign:'left'}}>this is some review by some one ......</h6>
                    <Link to="/showrecommendation" style={{textDecoration:'none',color:'black'}}><p style={{textAlign:'left'}}>More..</p></Link>
                </div>
                
                <div className="main-shuffle">
                    <div className="shuffle1">
                    <Link style={{textDecoration:'none',color:'black'}} to="/movies">
                        <div>
                            <p>Sometext</p>
                        <img className="poster-images" src="https://media.kitsu.io/anime/poster_images/2/medium.jpg?1597696808" alt="somepicture"/>
                        <p>The movie</p>                   
                        </div>
                        </Link>
                        <ShuffleIcon />
                        <Link style={{textDecoration:'none',color:'black'}} to="/movies">
                        <div>
                            <p>Sometext</p>
                        <img className="poster-images" src="https://media.kitsu.io/anime/poster_images/2/medium.jpg?1597696808" alt="somepicture"/>
                        <p>The movie</p>                   
                        </div>
                        </Link>    
                    </div>
                    <h6 style={{textAlign:'left'}}>this is some review by some one ......</h6>
                    <Link to="/showrecommendation" style={{textDecoration:'none',color:'black'}}><p style={{textAlign:'left'}}>More..</p></Link>
                </div>
                <div className="main-shuffle">
                    <div className="shuffle1">
                        <Link style={{textDecoration:'none',color:'black'}} to="/movies">
                        <div>
                            <p>Sometext</p>
                        <img className="poster-images" src="https://media.kitsu.io/anime/poster_images/2/medium.jpg?1597696808" alt="somepicture"/>
                        <p>The movie</p>                   
                        </div>
                        </Link>
                        <ShuffleIcon />
                        <Link style={{textDecoration:'none',color:'black'}} to="/movies">
                        <div>
                            <p>Sometext</p>
                        <img className="poster-images" src="https://media.kitsu.io/anime/poster_images/2/medium.jpg?1597696808" alt="somepicture"/>
                        <p>The movie</p>                   
                        </div>
                        </Link> 
                    </div>
                    <h6 style={{textAlign:'left'}}>this is some review by some one ......</h6>
                    <Link to="/showrecommendation" style={{textDecoration:'none',color:'black'}}><p style={{textAlign:'left'}}>More..</p></Link>
                </div>


        </div>
    )
}
