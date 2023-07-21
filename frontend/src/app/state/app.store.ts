import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { userReducer, userState } from './user/user.reducer';
import { searchState, searchReducer } from './search/search.reducer';
import { UserEffects } from './user/user.effects';
import { SearchEffects } from './search/search.effects';

export interface AppState {
    userReducer: userState,
    searchReducer: searchState
}

export const reducers: ActionReducerMap<AppState> = {
    userReducer,
    searchReducer
};

export const effects = [
    UserEffects,
    SearchEffects
];
  
export const appStoreModule = StoreModule.forRoot(reducers);