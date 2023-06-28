import { createAction, props } from "@ngrx/store";

export const toggleSearchSidebar = createAction(
    '[Search] Toggle SidebarState'
)

export const setSearchText = createAction(
    '[Search] Set Search Text',
    props<{ text: string }>()
)