import React from 'react';
import './assets/css/movieBody.css';
import { makeStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';

const useStyles = makeStyles((theme) => ({
    bodyImage: {
      backgroundImage: 'url(https://media.kitsu.io/anime/poster_images/2/medium.jpg?1597696808)',
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
        <section>
            <section className={classes.bodyImage}>
              
                <section className={classes.gradient}/>
            </section>
            
            <section className={classes.mainMovieImg}>
                <section className={classes.mainMovieImgsection1}>
                    <img className="img" src="https://media.kitsu.io/anime/poster_images/2/medium.jpg?1597696808"  alt="somepicture" width={240} height={260}/>
                </section>
                <section className={classes.detail}>
                    <h2>Noblesse</h2>
                    <p className=''>Complete<br />
                    <span>2020 fall</span><br />
                    <span>series | 13 episodes | 17+</span>
                    </p>
                </section>
            </section>

            <section className="rating-section">
                <section className="star">
                    <StarIcon className={classes.star}/>
                    <br/>
                    <p><strong>9.0</strong>/10</p>
                    
                    <p>8,335</p>
                </section>
                <section className="star">
                    <StarIcon className={classes.star}/>
                    <br/>
                    <p><strong>9.0</strong>/10</p>
                    <p>8,335</p>
                </section>
                <section className="star">
                    <StarBorderOutlinedIcon className={classes.starBorder}/>
                    <br/>
                    <p className="text">Add a rating</p>
                    
                </section>
                <section className="star">
                    <AddOutlinedIcon className={classes.starBorder}/>
                    <br/>
                    <p className="text">My List</p>
                    
                </section>
            
            </section>

            <section className="description-movie">
                <p>The story revolves around a noble vampire in a contemporary world after 820 years of hibernation. Dangerous adventures with new friends await him, as he uncovers is past and confronts a secret organization.</p>
                <section className="tags">
                    <p>Action</p>
                    <p>Uncanny</p>
                    <p>School</p>
                    <p>Vampire</p>
                </section>

                <section className="time-details">
                    <section className="details-1">
                        <p><strong>Source</strong></p>
                        
                        <p>Web Manga</p>
                    </section>
                    <section className="details-2">
                        <p><strong>Duration of the episode</strong></p>
                    
                        <p>23 minutes</p>
                    </section>
                </section>
                <section className="time-details">
                    <section className="details-1">
                        <p><strong>Presentation</strong></p>
                        
                        <p>2020-10-08</p>
                    </section>
                    <section className="details-2">
                        <p><strong>To</strong></p>
                    
                        <p>2020-12-31</p>
                    </section>
                </section>
                <section className="time-details">
                    <section className="details-1">
                        <p><strong>Studio</strong></p>
                        
                        <p>Production I.G</p>
                    </section>
                </section>

            </section>


            <section className="trailer-portion">
                <h2>Trailer</h2>
        
                <iframe title="trailer" className="trailer" width="560" height="315" src="https://www.youtube.com/embed/aSgrNkvqnmc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>


            <section className="related">
                <h2>Related</h2>
                <section className="related-movies">
                <img className="img" src="https://media.kitsu.io/anime/poster_images/2/medium.jpg?1597696808" alt="somepicture" width={120} height={150}/>
                <p className="movies-related-title">Movie This</p>
                </section>
            </section>

        </section>
    )
}
