import React from 'react'
import '../components/assets/css/episode.css'
import VisibilityIcon from '@material-ui/icons/Visibility';
import MessageIcon from '@material-ui/icons/Message';

export default function Episode() {
    let array = ['1','2','3','4','5','6'];
    return (
        <div className="episode-background">
            {
                array.map((element,index)=>
                <div className="episode-grid">
                        <div className="episode-detail">
                            <p>{index+1}: episode {element}</p>
                        </div>
                        <div>
                            <VisibilityIcon style={{marginRight: 10, color: '#C7C7C7'}}/>
                            <MessageIcon style={{color: '#606469'}}/>
                        </div>
            </div>
            
                )
            }
        </div>
    )
}
