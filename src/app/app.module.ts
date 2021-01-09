import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

//Modulos
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';

//RUTAS
import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [BrowserModule, PagesModule, SharedModule, APP_ROUTES],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
