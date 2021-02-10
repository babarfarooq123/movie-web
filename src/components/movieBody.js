import React, {useState} from 'react';
import './assets/css/movieBody.css';
import { makeStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
<<<<<<< HEAD
import {Link} from 'react-router-dom';

// 
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs';
// 
=======
import mal from "./assets/images/mal.png"
import {Link} from 'react-router-dom';
>>>>>>> 07c8b66cc171e068d0b2eba91861bf6bf0cbafc7

const useStyles = makeStyles((theme) => ({
    bodyImage: {
      backgroundImage: 'url(https://images8.alphacoders.com/756/756781.jpg)',
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover',
      backgroundPosition:'center center',
      height: '160px',
      opacity: 0.5,
      zIndex: 1
    },
    gradient:{
        height: '10.4rem',
        backgroundImage: 'linear-gradient( 180deg, transparent, rgba(251, 255, 251, 0.7), #ffff)'
    },
    darkGradient:{
        height: '10.4rem',
        backgroundImage: 'linear-gradient( 180deg, transparent, rgba(24, 33, 40,0.5), #182128)'
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
    },
    starDark:{
        color: 'white',
        fontSize: 40, 
    }
}));

<<<<<<< HEAD
export default function Moviebody() {
    const [rating, setRating] = useState(false)
=======
export default function Moviebody({darkMode}) {
>>>>>>> 07c8b66cc171e068d0b2eba91861bf6bf0cbafc7
    const classes = useStyles();

    return (
        <section className={darkMode? "body-of-movie-1":"body-of-movie"}>
            <section className={classes.bodyImage}>
              
                <section className={darkMode? classes.darkGradient:classes.gradient}/>
            </section>
            
            <section className={classes.mainMovieImg}>
                <section className={classes.mainMovieImgsection1}>
                    <img className="img" src="https://media.kitsu.io/anime/poster_images/2/large.jpg?1597696808"  alt="somepicture" width={150} height={200}/>
                </section>
                <section className="makeStyles">
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
                    {/* <br/> */}
                    <p><strong>9.0</strong>/10<br/>8,335</p>
                </section>
                <section className="star">
                    <img src={mal} alt="mal" style={{width:40,height:40}} className={classes.star}/>
                    {/* <br/> */}
                    <p><strong>9.0</strong>/10<br/>8,335</p>
                </section>
<<<<<<< HEAD
                <section className="star">
                    <StarBorderOutlinedIcon onCLick={() => setRating(true)} className={classes.starBorder}/>
                    <br/>
                    <p className="text">Add a rating</p>
=======
                <section className="star tagsMar">
                    <StarBorderOutlinedIcon className={darkMode? classes.starDark:classes.starBorder}/>
                    {/* <br/> */}
                    <p style={{fontWeight: 600, fontSize: '16px'}}>Add a rating</p>
>>>>>>> 07c8b66cc171e068d0b2eba91861bf6bf0cbafc7
                    
                </section>
                <section className="star tagsMar">
                    <AddOutlinedIcon className={darkMode? classes.starDark:classes.starBorder}/>
                    {/* <br/> */}
                    <p style={{fontWeight: 600, fontSize: '16px'}}>My List</p>
                    
                </section>
            
            </section>

            <section className={darkMode? "description-movie-1":"description-movie"}>
                <p>The story revolves around a noble vampire in a contemporary world after 820 years of hibernation. Dangerous adventures with new friends await him, as he uncovers is past and confronts a secret organization.</p>
<<<<<<< HEAD
                <section className="tags">
                    {/* <p>Action</p> */}
                    <Link to="/search" style={{textDecoration:'none',color:'black'}}> <p>Action</p></Link>
                    <Link to="/search" style={{textDecoration:'none',color:'black'}}> <p>Uncanny</p></Link>
                    <Link to="/search" style={{textDecoration:'none',color:'black'}}> <p>School</p></Link>
                    <Link to="/search" style={{textDecoration:'none',color:'black'}}> <p>Vampire</p></Link>
                    {/* <p>Uncanny</p>
                    <p>School</p>
                    <p>Vampire</p> */}
=======
                <section className={darkMode? "tags-1":"tags"}>
                    {/* <p>Action</p>
                    <p>Uncanny</p>
                    <p>School</p>
                    <p>Vampire</p> */}
                    <Link to="/search" style={{textDecoration:'none',color:'black'}}> <p>Action</p></Link>
                    <Link to="/search" style={{textDecoration:'none',color:'black'}}> <p>Uncanny</p></Link>
                    <Link to="/search" style={{textDecoration:'none',color:'black'}}> <p>School</p></Link>
                    <Link to="/search" style={{textDecoration:'none',color:'black'}}> <p>Vampire</p></Link>
                    
>>>>>>> 07c8b66cc171e068d0b2eba91861bf6bf0cbafc7
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
                        
                        {/* <p>Production I.G</p> */}
                        <section className={darkMode? "tags-1":"tags"}>
                        <Link to="/search" style={{textDecoration:'none',color:'black'}}> <p>Production I.G</p></Link>
                        </section>
                    </section>
                </section>

            </section>


            <section className="trailer-portion">
                <h2>Trailer</h2>
        
                <iframe title="trailer" className="trailer" width="560" height="315" src="https://www.youtube.com/embed/aSgrNkvqnmc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>


            <section className="related">
                <h2>Related</h2>
                {/* <section className="related-movies">
                <img className="img" src="https://media.kitsu.io/anime/poster_images/2/medium.jpg?1597696808" alt="somepicture" width={120} height={150}/>
                <p className="movies-related-title">Movie This</p>
                </section> */}
                <section>
                        <section>
                            <img className="poster-images" src="https://media.kitsu.io/anime/poster_images/2/medium.jpg?1597696808" alt="somepicture"/>
       
                            <p className="textOnImage-1">Movie Name</p>
                        </section>
                        <p className="movie-title">Movie Name</p>
                        <p className="rating">Rating: <span> < StarIcon style={{color: '#FF9200', fontSize: 18,marginBottom:-3}}/> 6.05</span></p>
                    </section>
            </section>

        </section>
    )
}
