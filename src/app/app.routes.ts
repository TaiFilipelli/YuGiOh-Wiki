import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { Page404Component } from './pages/page404/page404.component';
import { DetailComponent } from './pages/detail/detail.component';

export const routes: Routes = [
    {path:'', component: HomepageComponent, title:'YuGiOh Wiki'},
    {path:'card/:name', component: DetailComponent, title:'Detalles de la carta '},
    {path:'404', component:Page404Component, title:'404'},
    {path:'**', redirectTo:'404'}
];
