import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FilterView } from './pipeline/filter';
import { AppComponent as App }  from './component/app.component';
import { LogoutComponent as Logout }  from './component/logout.component';
import { HomeComponent as Home }  from './component/home.component';
import { HeaderComponent as Header }  from './component/header.component';
import { FooterComponent as Footer}  from './component/footer.component';
import { LoginComponent as Login}  from './component/login.component';
import { PageNotFoundComponent as PageNotFound }  from './component/pagenotfound.component';

const appRoutes: Routes = [
  { path: 'home', component: Home },
  { path: 'login', component: Login },
  { path: 'logout', component: Logout },
  { path: 'page', component: PageNotFound },
  { path: '**', component: PageNotFound },
   {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes), HttpModule, FormsModule ],
  exports: [
    RouterModule
  ],
  declarations: [ App, Header, FilterView, Footer, PageNotFound, Home, Login, Logout ],
  bootstrap:    [ App ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
