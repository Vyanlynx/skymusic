import { Album_path } from '@/utils/constants';
import { apiCall } from '@/utils/genericFunctions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '../store';

const initialState: any = {
    apiResponse: {},
    favourites: [],
    playlists: []
}
const { actions, reducer } = createSlice({
    name: "Explore",
    initialState,
    reducers: {
        fetchAlbumsData: (state, action: PayloadAction<any>) => {
            state.apiResponse = action.payload;
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
        }
    }
})

export const { fetchAlbumsData, addTofavourites,removeFromFavourites } = actions;
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
