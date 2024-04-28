import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
    trending: {},
    status: {}
}
const { actions, reducer } = createSlice({
    name: "ExploreStoreSlice",
    initialState,
    reducers: {
        setTrending: (state, action: PayloadAction<any>): void => {
            state.trending = action.payload;
            state.status.isLoading = false
        }
    }
})

export const { setTrending } = actions;
export default reducer;
export const explorePageSelector = (state: any) => state.ExploreStoreSlice;
