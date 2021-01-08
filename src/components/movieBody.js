import React from 'react';
import './assets/css/movieBody.css';
import { makeStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';

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
        backgroundImage: 'linear-gradient( 180deg, transparent, rgba(251, 255, 251, 0.7), #ffff)'
    },
    mainMovieImg: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
        position: 'relative',
        bottom: '140px',
        marginLeft: '10px',
    
    },
    detail: {
        marginLeft: '8px',
    },
    star:{
        color: '#FF9200',
        fontSize: 40,    
    },
    starBorder:{
        color: 'black',
        fontSize: 40,    
    }
}));

export default function Moviebody() {
    const classes = useStyles();
    return (
        <div>
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

            <div className="rating-section">
                <div className="star">
                    <StarIcon className={classes.star}/>
                    <br/>
                    <p><strong>9.0</strong>/10</p>
                    
                    <p>8,335</p>
                </div>
                <div className="star">
                    <StarIcon className={classes.star}/>
                    <br/>
                    <p><strong>9.0</strong>/10</p>
                    <p>8,335</p>
                </div>
                <div className="star">
                    <StarBorderOutlinedIcon className={classes.starBorder}/>
                    <br/>
                    <p className="text">Add a rating</p>
                    
                </div>
                <div className="star">
                    <AddOutlinedIcon className={classes.starBorder}/>
                    <br/>
                    <p className="text">My List</p>
                    
                </div>
            
            </div>

            <div className="description-movie">
                <p>The story revolves around a noble vampire in a contemporary world after 820 years of hibernation. Dangerous adventures with new friends await him, as he uncovers is past and confronts a secret organization.</p>
                <div className="tags">
                    <p>Action</p>
                    <p>Uncanny</p>
                    <p>School</p>
                    <p>Vampire</p>
                </div>

                <div className="time-details">
                    <div className="details-1">
                        <p><strong>Source</strong></p>
                        
                        <p>Web Manga</p>
                    </div>
                    <div className="details-2">
                        <p><strong>Duration of the episode</strong></p>
                    
                        <p>23 minutes</p>
                    </div>
                </div>
                <div className="time-details">
                    <div className="details-1">
                        <p><strong>Presentation</strong></p>
                        
                        <p>2020-10-08</p>
                    </div>
                    <div className="details-2">
                        <p><strong>To</strong></p>
                    
                        <p>2020-12-31</p>
                    </div>
                </div>
                <div className="time-details">
                    <div className="details-1">
                        <p><strong>Studio</strong></p>
                        
                        <p>Production I.G</p>
                    </div>
                </div>

            </div>


            <div className="trailer-portion">
                <h2>Trailer</h2>
        
                <iframe className="trailer" width="560" height="315" src="https://www.youtube.com/embed/aSgrNkvqnmc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>


            <div className="related">
                <h2>Related</h2>
                <div className="related-movies">
                <img className="img" src="https://media.kitsu.io/anime/poster_images/2/medium.jpg?1597696808" width={120} height={150}/>
                <p className="movies-related-title">Movie This</p>
                </div>
            </div>

        </div>
    )
}
