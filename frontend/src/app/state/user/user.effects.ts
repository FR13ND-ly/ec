import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs";
import { toggleUserSidebar } from "./user.actions";
import { ScrollService } from "src/app/core/services/scroll.service";

@Injectable()
export class UserEffects {

  actions$ = inject(Actions)
  scrollService = inject(ScrollService)

  toggleUserSidebar$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(toggleUserSidebar.type),
      tap(() => this.scrollService.toggleVisibility())
    )
  }, {dispatch : false})

}
