import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ScrollService } from "src/app/core/services/scroll.service";
import { tap } from "rxjs";
import { toggleSearchSidebar } from "./search.actions";

@Injectable()
export class SearchEffects {

    actions$ = inject(Actions)
    scrollService = inject(ScrollService)

    toggleSearchSidebar$ = createEffect((): any => {
        return this.actions$.pipe(
          ofType(toggleSearchSidebar.type),
          tap(() => this.scrollService.toggleVisibility())
        )
      }, {dispatch : false})

}