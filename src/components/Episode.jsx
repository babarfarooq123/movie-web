import React from 'react'
import '../components/assets/css/episode.css'
import VisibilityIcon from '@material-ui/icons/Visibility';
import MessageIcon from '@material-ui/icons/Message';
import {Link} from "react-router-dom"

export default function Episode() {
    let array = ['1','2','3','4','5','6'];
    return (
        <div className="episode-background">
            {
                array.map((element,index)=>
                <div className="episode-grid">
                        <Link to="/episode" className="episode-grid" style={{textDecoration:'none',color:'black',flex:1}}><div className="episode-detail">
                            <p>{index+1}: episode {element}</p>
                        </div>
                        <div>
                            <VisibilityIcon style={{marginRight: 10, color: '#C7C7C7'}}/>
                            <Link to="/comments" style={{textDecoration:'none',color:'black'}}><MessageIcon style={{color: '#606469'}}/></Link>
                        </div>
                        </Link>
            </div>
            
                )
            }
        </div>
    )
}
