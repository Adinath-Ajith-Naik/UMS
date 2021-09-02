import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserManagementSystemModule } from './pages/user-management-system/user-management-system.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserManagementSystemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
