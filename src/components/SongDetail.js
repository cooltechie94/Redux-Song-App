import React from 'react';
import {connect} from 'react-redux';

const SongDetail=({song})=>{
    // console.log(props);
    return(
        <div>
            <h3>Song Detail:</h3>
            <p>Title: {song?song.title:null}</p>
            <br />
            <p>Duration: {song?song.duration:null}</p>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return {
        song:state.currentSong
    }
}
export default connect(mapStateToProps)(SongDetail);