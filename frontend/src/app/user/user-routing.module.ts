import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [
    { path: '', component: UserComponent, children: [
      { path: '', loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule) },
      { path: 'articol/:id', loadChildren: () => import('./feature/articles-wrapper/articles-wrapper.module').then(m => m.ArticlesWrapperModule) },
    ]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
  