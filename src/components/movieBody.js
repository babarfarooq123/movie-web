import React from 'react';
import './assets/css/movieBody.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    bodyImage: {
      backgroundImage: 'url(https://media.kitsu.io/anime/poster_images/2/medium.jpg?1597696808)',
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat',
      backgroundSize:'100% 100%',
      height: '300px',
      opacity: 0.5,
      zIndex: 1
    },
    gradient:{
        height: '19.4rem',
        backgroundImage: 'linear-gradient( 180deg, transparent, rgba(255, 255, 255, 0.7), #ffff)'
    },
    mainMovieImg: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
        position: 'relative',
        bottom: '140px',
        marginLeft: '10px',
        // border: '1px solid red',
    },
    detail: {
        marginLeft: '8px',
    }
}));

export default function Moviebody() {
    const classes = useStyles();
    return (
        <div >
            <div className={classes.bodyImage}>
              
                <div className={classes.gradient}/>
            </div>
            
            <div className={classes.mainMovieImg}>
                <div className={classes.mainMovieImgDiv1}>
                    <img className="img" src="https://media.kitsu.io/anime/poster_images/2/medium.jpg?1597696808" width={240} height={260}/>
                </div>
                <div className={classes.detail}>
                    <h2>Noblesse</h2>
                    <p className=''>Complete<br />
                    <span>2020 fall</span><br />
                    <span>series | 13 episodes | 17+</span>
                    </p>
                </div>
            </div>

        </div>
    )
}
