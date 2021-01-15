import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import './assets/css/homeBody.css';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function Popular() {
    return (
        <div className="App-body">
           <div className="row">
                
                        
                            <div className="imgDiv">
                                <img className="poster-images" src="https://anerdyperspective.files.wordpress.com/2018/06/jyushimatsu-matsuno.jpg" alt="image"/>
                                <p className="textOnImage" style={{textAlign:'center',fontWeight:'bolder',fontSize:12,bottom:'40px'}}> Matsuno, Juushimatsu</p>
                                {/* <p className="heart-icon">19902: <FavoriteIcon style={{color:'white'}}/></p> */}
                            </div>
                            <div className="imgDiv">
                                <img className="poster-images" src="https://anerdyperspective.files.wordpress.com/2018/06/jyushimatsu-matsuno.jpg" alt="image"/>
                                <p className="textOnImage" style={{textAlign:'center',fontWeight:'bolder',fontSize:12,bottom:'40px'}}> Matsuno, Juushimatsu</p>
                            </div>
                            <div className="imgDiv">
                                <img className="poster-images" src="https://anerdyperspective.files.wordpress.com/2018/06/jyushimatsu-matsuno.jpg" alt="image"/>
                                <p className="textOnImage" style={{textAlign:'center',fontWeight:'bolder',fontSize:12,bottom:'40px'}}> Matsuno, Juushimatsu</p>
                            </div>
                            <div className="imgDiv">
                                <img className="poster-images" src="https://anerdyperspective.files.wordpress.com/2018/06/jyushimatsu-matsuno.jpg" alt="image"/>
                                <p className="textOnImage" style={{textAlign:'center',fontWeight:'bolder',fontSize:12,bottom:'40px'}}> Matsuno, Juushimatsu</p>
                            </div>
                            <div className="imgDiv">
                                <img className="poster-images" src="https://anerdyperspective.files.wordpress.com/2018/06/jyushimatsu-matsuno.jpg" alt="image"/>
                                <p className="textOnImage" style={{textAlign:'center',fontWeight:'bolder',fontSize:12,bottom:'40px'}}> Matsuno, Juushimatsu</p>
                            </div>

                        
                        
                    </div>
        </div>
    )
}
