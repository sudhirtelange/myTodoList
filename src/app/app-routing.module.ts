import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MyComponents/about/about.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { TodosComponent } from './MyComponents/todos/todos.component';

const routes: Routes = [
  {path:'about',component: AboutComponent},
  {path:'',component: HeaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
