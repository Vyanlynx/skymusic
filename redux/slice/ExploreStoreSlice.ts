import { apiCall } from '@/utils/helpers';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '../store';

const initialState: any = {
    apiResponse: {},
    favourites: [],
    playlists: {
        MyPlayList: []
    },
    showPlayListPopUp: false,
    isOpenMenu: true,
    searchedAlbum: []
}
const { actions, reducer } = createSlice({
    name: "Explore",
    initialState,
    reducers: {
        fetchAlbumsData: (state, action: PayloadAction<any>) => {
            state.apiResponse = action.payload;
        },
        setShowPlayListPopUp: (state, action: PayloadAction<any>) => {
            state.showPlayListPopUp = action.payload;
        },
        setsearchedAlbum: (state, action: PayloadAction<any>) => {
            state.searchedAlbum = action.payload;
        },
        setOpenMenuBar: (state) => {
            state.isOpenMenu = !state.isOpenMenu;
        },
        addTofavourites: (state, action: PayloadAction<any>) => {
            if (state.favourites.length) {
                state.favourites = [...state.favourites, action.payload];
            } else {
                state.favourites = [action.payload];
            }
        },
        removeFromFavourites: (state, action: PayloadAction<any>) => {
            state.favourites = action.payload;
        },
        setPlaylistDetails: (state, action: PayloadAction<any>) => {
            if (Object.keys(state.playlists).length) {
                state.playlists = { ...state.playlists, [action.payload]: [] };
            } else {
                state.playlists = { [action.payload]: [] };
            }
        },
        setSongsIntoPlaylists: (state, action: PayloadAction<any>) => {
            // console.log(action.payload.song)
            if (Object.keys(state.playlists).length) {
                state.playlists[action.payload.playListName] = [...state.playlists[action.payload.playListName], action.payload.song];
            } else {
                state.playlists[action.payload.playListName] = [action.payload.song];
            }
        },

    }
})

export const {
    fetchAlbumsData,
    addTofavourites,
    setSongsIntoPlaylists,
    removeFromFavourites,
    setPlaylistDetails,
    setOpenMenuBar,
    setsearchedAlbum,
    setShowPlayListPopUp } = actions;

export const fetchAlbums = () => async (dispatch: AppDispatch) => {
    try {
        let albumData = await apiCall('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
        dispatch(fetchAlbumsData(albumData));
    } catch (error) {
        console.log(error)
    }
}
export default reducer;
export const explorePageSelector = (state: any) => state.ExploreStoreSlice;
