import React from 'react';
import MovieNav from "../components/movieNav";
import '../components/assets/css/movieDetail.css';

function Moviedetails() {
    return (
        <div className='App rootmain' style={{paddingRight:'15%',paddingLeft:'15%'}}>
            <MovieNav />
        </div>
    );
}

export default Moviedetails;