import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CreateUserComponent }
];

@NgModule({
  declarations: [
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    CreateUserComponent,
  ]
})
export class UserManagementSystemModule { }
