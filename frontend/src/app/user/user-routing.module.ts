import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [
    { path: '', component: UserComponent, children: [
      { path: '', loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule) },
      { path: 'avize', loadChildren: () => import('./feature/announcements/announcements.module').then(m => m.AnnouncementsModule) },
      { path: 'articol/:id', loadChildren: () => import('./feature/articles-wrapper/articles-wrapper.module').then(m => m.ArticlesWrapperModule) },
      { path: 'utilizator/:id/dashboard', loadChildren: () => import('./feature/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'utilizator/:id/readliste', loadChildren: () => import('./feature/readlists/readlists.module').then(m => m.ReadlistsModule) },
      { path: 'utilizator/:id/setari', loadChildren: () => import('./feature/settings/settings.module').then(m => m.SettingsModule) },
    ]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
  