import { createReducer, on } from "@ngrx/store";
import { setSearchText, toggleSearchSidebar } from "./search.actions";

export interface searchState {
    searchText: '',
    sidebarOpen : boolean
} 

export const initialState: searchState = {
    searchText: '',
    sidebarOpen: false,
};

export const searchReducer = createReducer(
    initialState,

    on(toggleSearchSidebar, (state, action) => ({
        ...state,
        ...{ 
            sidebarOpen: !state.sidebarOpen,
        },
      })
    ),

    on(setSearchText, (state, action : any) => ({
        ...state,
        ...{ 
            searchText: action.text,
        },
      })
    )
)