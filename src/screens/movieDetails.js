import React,{useState} from 'react';
import MovieNav from "../components/movieNav";
import { makeStyles } from '@material-ui/core/styles';
import MovieBody from "../components/movieBody";

const useStyles = makeStyles((theme) => ({
    main: {
        border: '4px solid green',
    }
}));

function Moviedetails() {
    const classes = useStyles();
    let news = useState(true);
    let episode = useState(false);
    let stats = useState(false);
    let characters = useState(false);

    return (
        <div className='App' >
            <MovieNav news={news} episode={episode} stats={stats} characters={characters}/>
            {
                news? <MovieBody />:''
            }
        </div>
    );
}

export default Moviedetails;