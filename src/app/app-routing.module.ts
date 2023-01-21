import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SongPageComponent } from './song-page/song-page.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path:'song-page',component: SongPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
