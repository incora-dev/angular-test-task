import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TradePageComponent } from './pages/trade-page/trade-page.component';

const routes: Routes = [{
  path: '',
  component: TradePageComponent
}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TradesRoutingModule { }
