import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongPageComponent } from './song-page/song-page.component';

const routes: Routes = [
  {path:'song-page',component: SongPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
