import React from 'react'
import ReactSwipeNavigation from 'react-swipe-navigation'
import "../components/assets/css/profile.css";
import { Doughnut } from 'react-chartjs-2';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { fade, makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Homebody from "../components/homebody"
import {Link} from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import ShuffleIcon from '@material-ui/icons/Shuffle';

const useStyles = makeStyles((theme) => ({
    root1: {
      flexGrow: 1,
      backgroundColor: 'white',
      color:'black',
      boxShadow:'0px 0px 4px rgba(0,0,0,0.5)',
      borderWidth:1,
      borderColor:'rgba(0,0,0,0.5)'
   
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
    root3: {
    

        backgroundColor: 'white',
          color: 'black',
          borderBottom:'1px solid rgba(0,0,0,0.2)',
      },
      menuButton: {
          marginRight: theme.spacing(2),
        },
        title: {
          flexGrow: 1,
        },
  }));


export default function Profile() {
    const classes = useStyles();

    let color =[
        '#73D490',
        '#91D0EF',
        '#F97275'
    ]
    let dataProvide =  {
        labels: [
            '30: Perfect',
            '20: Normal',
            '10: Bad'
        ],
        datasets: [{
        data: [30, 20, 10],
        backgroundColor:color,
        hoverBackgroundColor: color,
        }],
    };

    const optionForDoughNut = {
        legend: {
           position: 'right'
        }
     
}

    return (
        <div>
             <AppBar className={classes.root3} position="static">
                    <Toolbar className={classes.root3}>
                        <IconButton onClick={()=>window.history.back()} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <ArrowBackIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Profile
                        </Typography>
                        <div>
                            {/* <CommentIcon className={classes.iconPlace}/> */}
                            {/* <FavoriteBorderIcon className={classes.iconPlace}/> */}
                        </div>
                    </Toolbar>
                </AppBar>
        
            <div className="proMain">
            </div>
                <img className="proMainImg" src='https://img.buzzfeed.com/buzzfeed-static/static/2018-08/1/16/tmp/buzzfeed-prod-web-06/18744028b408f907a59e0b9229fc85ef-8.jpg?downsize=900:*&output-format=auto&output-quality=auto' alt="profile" />
                <h3 className="proMainh4">Name Profile</h3>

            {/* mine portion */}
            
            
            <ReactSwipeNavigation menu={ ['Statistics', 'Anime','Recommended'] } >
                <div>

                     <section style={{marginTop:20,width:'80%'}}>
                     <Doughnut className="margin-top" data = {dataProvide} options={optionForDoughNut} />
                     </section>

                </div>
                <div>
                        <section>
                            <div className="profileShow-1">
                                <Link to="/search" style={{color:'black',textDecoration:'non'}}><p>More</p></Link>
                                <p>Anime Movie</p>
                            </div>
                            <div className="movies-show-profile">
                                <Homebody/>
                            </div>

                        </section>
                </div>
                <div>
                        <section>
                        <section className="main-shuffle">
                    <section className="shuffle1">
                    <Link style={{textDecoration:'none',color:'black'}} to="/movies">
                        <section>
                            <p>Sometext</p>
                        <img className="poster-images" src="https://media.kitsu.io/anime/poster_images/2/medium.jpg?1597696808" alt="somepicture"/>
                        <p style={{color:'blue'}}>The movie</p>                   
                        </section>
                        </Link>
                        <ShuffleIcon />
                        <Link style={{textDecoration:'none',color:'black'}} to="/movies">
                        <section>
                            <p>Sometext</p>
                        <img className="poster-images" src="https://media.kitsu.io/anime/poster_images/2/medium.jpg?1597696808" alt="somepicture"/>
                        <p style={{color:'blue'}}>The movie</p>                   
                        </section>
                        </Link>    
                    </section>
                    <h6 style={{textAlign:'left'}}>this is some review by some one ......</h6>
                    <section style={{display:'flex',justifyContent:'space-between'}}>
                    <Link to="/showrecommendation" style={{textDecoration:'none',color:'blue'}}><p style={{textAlign:'left'}}>More..</p></Link>
                    <Link to="/showrecommendation" style={{textDecoration:'none',color:'blue'}}><p style={{textAlign:'right'}}>My name </p></Link>
                    </section>
                </section>
                           
                        </section>
                </div>
               
            </ReactSwipeNavigation>
        


        </div>
    )
}
