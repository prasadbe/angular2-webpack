import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FilterView } from './pipeline/filter';
import { AppComponent }  from './component/app.component';
import { HomeComponent }  from './component/home.component';
import { HeaderComponent }  from './component/header.component';
import { FooterComponent }  from './component/footer.component';
import { PageNotFoundComponent }  from './component/pagenotfound.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'page', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent },
   {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes) ],
  exports: [
    RouterModule
  ],
  declarations: [ AppComponent, HeaderComponent, FilterView, FooterComponent, PageNotFoundComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
