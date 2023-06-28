import { createSelector, createFeatureSelector } from "@ngrx/store";
import { userState } from "./user.reducer";

const userFeature = createFeatureSelector<userState>('userReducer');

export const userSidebarOpen = createSelector(
    userFeature,
    (state: userState) => state.sidebarOpen
)