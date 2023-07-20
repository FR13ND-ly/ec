import { Injectable, inject, Renderer2, RendererFactory2, Inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable, map } from "rxjs";
import { toggleUserSidebar } from "./user.actions";
import { DOCUMENT } from "@angular/common";

@Injectable()
export class UserEffects {

  actions$ = inject(Actions)

  @Inject(DOCUMENT) document: Document = inject(DOCUMENT)
  rendererFactory = inject(RendererFactory2)

  toggleUserSidebar$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(toggleUserSidebar.type),
      map((value ) => {
        this.document.body.classList.toggle('no-scroll')
      })
    )
  }, {dispatch : false})

}
