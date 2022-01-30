import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchTopicsComponent } from './components/search-bar/search-bar.component';


const routes: Routes = [
  { path: '', component: SearchTopicsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
