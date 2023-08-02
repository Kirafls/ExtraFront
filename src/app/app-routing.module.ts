import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IncioComponent } from './incio/incio.component';

const routes: Routes = [
  {path:"incio",component:IncioComponent},
  {path:"**",component:IncioComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
