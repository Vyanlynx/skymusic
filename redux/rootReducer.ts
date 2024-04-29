import { combineReducers } from "redux";
import customerDetailsSlice from './slice/CustomerDetailsSlice';
import ExploreSlice from './slice/ExploreStoreSlice'
const rootReducer = combineReducers({
    customerDetails: customerDetailsSlice,
    ExplorePageDetails: ExploreSlice
})

export default rootReducer;