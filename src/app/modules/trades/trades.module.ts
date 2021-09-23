import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TradeFormComponent } from './components/trade-form/trade-form.component';
import { TradePageComponent } from './pages/trade-page/trade-page.component';
import { TradesRoutingModule } from './trades-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TradeFormComponent,
    TradePageComponent
  ],
  imports: [
    CommonModule,
    TradesRoutingModule,
    ReactiveFormsModule
  ]
})
export class TradesModule { }
