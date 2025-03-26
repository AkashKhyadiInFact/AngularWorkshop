import { Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AboutMeComponent } from './about-me/about-me.component';

export const routes: Routes = [
    {path:'', component: TodoListComponent},
    {path: 'about', component: AboutMeComponent},
    {path: 'about/:name', component: AboutMeComponent}
];
