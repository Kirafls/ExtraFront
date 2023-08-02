import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IncioComponent } from './incio/incio.component';
import { AcercaComponent } from './acerca/acerca.component';

const routes: Routes = [
  {path:"incio",component:IncioComponent},
  {path:"acerca",component:AcercaComponent},
  {path:"**",component:IncioComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
