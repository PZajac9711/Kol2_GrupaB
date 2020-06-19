import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PzForumComponent} from './components/pz-forum/pz-forum.component';
import {PzForumDetailsComponent} from './components/pz-forum-details/pz-forum-details.component';


const routes: Routes = [
  {
    path: 'posts',
    component: PzForumComponent
  },
  {
    path: 'posts/:id',
    component: PzForumDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
