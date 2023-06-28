import { createSelector, createFeatureSelector } from "@ngrx/store";
import { searchState } from "./search.reducer";

const userFeature = createFeatureSelector<searchState>('searchReducer');

export const searchSidebarOpen = createSelector(
    userFeature,
    (state: searchState) => state.sidebarOpen
)