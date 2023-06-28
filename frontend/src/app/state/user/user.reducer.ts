import { createReducer, on } from "@ngrx/store";
import { toggleUserSidebar } from "./user.actions";

export interface userState {
    sidebarOpen : boolean,
} 

export const initialState: userState = {
    sidebarOpen: false,
};

export const userReducer = createReducer(
    initialState,

    on(toggleUserSidebar, (state, action) => ({
        ...state,
        ...{ 
            sidebarOpen: !state.sidebarOpen,
        },
      })
    )
)