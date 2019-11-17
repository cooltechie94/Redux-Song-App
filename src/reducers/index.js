import {combineReducers} from 'redux';
const songListReducer=()=>{
        return [
                {title:'Never Too Late',duration:'4:00'},
                {title:'Animal I Have Become',duration:'5:00'},
                {title:'100 Days',duration:'4:00'},
                {title:'Riot',duration:'4:00'}
            ];
};
const selectSongReducer=(selectedSong=null,action)=>{
    if(action.type==='SELECTED_SONG'){
        return action.payload;
    }
    return selectedSong;
};
export default combineReducers({
    songs:songListReducer,
    currentSong: selectSongReducer
});