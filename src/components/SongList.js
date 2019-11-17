import React from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions';
class SongList extends React.Component{
    constructor(props){
        super(props);
        // console.log(props);
        this.handleClick=this.handleClick.bind(this);

    }
    handleClick=(e)=>{
        console.log(e);
        
    }
    renderSongList(){
        return this.props.songs.map(song=>{
            return <div className="item" key={song.title}>
                <div className="right floated content">
                    <button className="ui primary button" onClick={()=>this.props.selectSong(song)}>
                        Select Song
                    </button>
                </div>
                <div className="content">{song.title}</div>
                </div>
        });
    }
    render(){
        console.log(this.props)
        return(
            
            // <div className="ui cards" style={{margin:'5vh',height: '40vh', width: '-webkit-fill-available'}}>
                 <div className="card">
                        SongList
                        <div className="ui divided list">
                        {this.props.songs?this.renderSongList():null}
                        </div>
                   
                </div>
            
            // </div> 
        );
    }
}
const mapStateToProps=(state)=>{
    // console.log(state);
    return {
        songs:state.songs
    };
}
export default connect(mapStateToProps,{selectSong})(SongList);