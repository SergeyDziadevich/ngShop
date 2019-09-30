import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderFormComponent } from './components';

const routes: Routes = [
  {
    path: 'order',
    component: OrderFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
