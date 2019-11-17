//ACTIONS CREATORS
export const getSongList=(state)=>{
    return {
        type:'GET_SONG_LIST',
        payload:state.song.List
    };
}
export const selectSong=(song)=>{
    return {
        type: 'SELECTED_SONG',
        payload: song
    };
}