import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { makeStyles } from '@material-ui/core/styles';
import "../components/assets/css/movieNav.css";
import FavoriteIcon from '@material-ui/icons/Favorite';
import MediaControlCard from '../components/characterCard';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
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

function Characterclick(){
    const classes = useStyles();


    return(
        <div>
            <AppBar className={classes.root3} position="static">
                    <Toolbar className={classes.root3}>
                        <IconButton onClick={()=>window.history.back()} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <ArrowBackIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Matsuno, Juushimatsu
                        </Typography>
                        <div>
                            {/* <CommentIcon className={classes.iconPlace}/> */}
                            <FavoriteBorderIcon className={classes.iconPlace}/>
                        </div>
                    </Toolbar>
                </AppBar>

                <div className="charTop">
                    <img className="charTop-img1" src="https://anerdyperspective.files.wordpress.com/2018/06/jyushimatsu-matsuno.jpg" alt="character" />
                    <h4>
                            Matsuno, Juushimatsu
                    </h4>
                    <div className="charDown">
                        <p className="charDown-p1">Text text </p>
                        <FavoriteIcon className={classes.iconPlace1}/>
                        <p className="charDown-p2"> 45</p>
                    </div>
                </div>

                <hr />
                <br />

                <div className="mainCharCard">
                <div className="charCard">
                    <Typography component="h5" variant="h6">
                        Text text
                    </Typography>
                    <MediaControlCard />
                </div>
                </div>

                <br />

                <div className="floater">
                    {/* <Typography component="h5" variant="h6">
                        Text text
                    </Typography> */}
                        <section className={classes.mainMovieImg}>
                            <section className={classes.mainMovieImgsection1}>
                                <img className="img" src="https://media.kitsu.io/anime/poster_images/2/medium.jpg?1597696808" alt="somepicture" width={240} height={260}/>
                            </section>
                            <section className={classes.detail}>
                                <h2>Soukou Musume Senki</h2>
                                <p className=''>Complete<br />
                                <span>2021 fall</span><br />
                                <span className={classes.starAlign}>series | <StarIcon className={classes.starimg} /> | 17+</span>
                                </p>
                            </section>
                        </section>
                </div>

        </div>
    );
}

export default Characterclick;