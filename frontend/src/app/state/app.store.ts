import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { userReducer, userState } from './user/user.reducer';
import { searchState, searchReducer } from './search/search.reducer';

export interface AppState {
    userReducer: userState,
    searchReducer: searchState
}

export const reducers: ActionReducerMap<AppState> = {
    userReducer,
    searchReducer
};
  
export const appStoreModule = StoreModule.forRoot(reducers);