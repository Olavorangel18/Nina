import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplaintPageComponent } from './pages/complaint-page/complaint-page.component';

const routes: Routes = [
  {path : '', component : ComplaintPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
