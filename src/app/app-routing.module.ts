import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '',
    children: [
      { path: '', component: HomeComponent },
      { path: 'create', loadChildren: () => import('./pages/user-management-system/user-management-system.module').then((m) => m.UserManagementSystemModule)}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
