import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BottomBarComponent } from './nav/bottom-bar/bottom-bar.component';
import { RouteLiterals } from '../constants';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: RouteLiterals.SIGNUP
  },
  {
    path: RouteLiterals.SIGNUP,
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: RouteLiterals.REGISTRATION_SUCCESS,
    loadChildren: () => import('./registration-success/registration-success.module').then(m => m.RegistrationSuccessPageModule)
  },
  {
    path: '',
    component: BottomBarComponent,
    children: [
      {
        path: RouteLiterals.PROFILE,
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: RouteLiterals.REPORTS,
        loadChildren: () => import('./reports/reports.module').then(m => m.ReportsPageModule)
      },
      {
        path: RouteLiterals.REPORTS_MAP,
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
