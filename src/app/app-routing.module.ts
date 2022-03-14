import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {path: 'auth',
  loadChildren: () => import('./modules/authentication/authentication.module').then(m=>m.AuthenticationModule)
  },
  {
    path: 'music',
    loadChildren: ()=>import('./modules/music/music.module').then(m=>m.MusicModule),
    canActivate: [AuthGuard], canLoad: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
