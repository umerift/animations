import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {C1Component} from './c1/c1.component';
import {C2Component} from './c2/c2.component';
import {C3Component} from './c3/c3.component';

const routes: Routes = [
  { path: 'science', component: C1Component, data: { num: 1 } },
  { path: 'technology', component: C2Component, data: { num: 5 } },
  { path: 'test', component: C3Component, data: { num: 5 } },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
