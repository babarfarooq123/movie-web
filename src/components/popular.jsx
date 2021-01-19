import React from 'react'
import './assets/css/homeBody.css';
import {Link} from 'react-router-dom'

export default function Popular() {
    return (
        <div className="App-body">
           <div className="row">
                
                            <Link to="/characterclick" style={{textDecoration:'none',color:'black'}} >
                            <div className="imgDiv">
                                <img className="poster-images" src="https://anerdyperspective.files.wordpress.com/2018/06/jyushimatsu-matsuno.jpg" alt="somepicture"/>
                                <p className="textOnImage" style={{textAlign:'center',fontWeight:'bolder',fontSize:12,bottom:'40px'}}> Matsuno, Juushimatsu</p>
                                {/* <p className="heart-icon">19902: <FavoriteIcon style={{color:'white'}}/></p> */}
                            </div>
                            </Link>

                            <Link to="/characterclick" style={{textDecoration:'none',color:'black'}} >
                            <div className="imgDiv">
                                <img className="poster-images" src="https://anerdyperspective.files.wordpress.com/2018/06/jyushimatsu-matsuno.jpg" alt="somepicture"/>
                                <p className="textOnImage" style={{textAlign:'center',fontWeight:'bolder',fontSize:12,bottom:'40px'}}> Matsuno, Juushimatsu</p>
                                {/* <p className="heart-icon">19902: <FavoriteIcon style={{color:'white'}}/></p> */}
                            </div>
                            </Link>
                            <Link to="/characterclick" style={{textDecoration:'none',color:'black'}} >
                            <div className="imgDiv">
                                <img className="poster-images" src="https://anerdyperspective.files.wordpress.com/2018/06/jyushimatsu-matsuno.jpg" alt="somepicture"/>
                                <p className="textOnImage" style={{textAlign:'center',fontWeight:'bolder',fontSize:12,bottom:'40px'}}> Matsuno, Juushimatsu</p>
                                {/* <p className="heart-icon">19902: <FavoriteIcon style={{color:'white'}}/></p> */}
                            </div>
                            </Link>
                            <Link to="/characterclick" style={{textDecoration:'none',color:'black'}} >
                            <div className="imgDiv">
                                <img className="poster-images" src="https://anerdyperspective.files.wordpress.com/2018/06/jyushimatsu-matsuno.jpg" alt="somepicture"/>
                                <p className="textOnImage" style={{textAlign:'center',fontWeight:'bolder',fontSize:12,bottom:'40px'}}> Matsuno, Juushimatsu</p>
                                {/* <p className="heart-icon">19902: <FavoriteIcon style={{color:'white'}}/></p> */}
                            </div>
                            </Link>
                            
                        
                        
                    </div>
        </div>
    )
}
