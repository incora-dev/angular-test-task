import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { TradesRoutingModule } from './trades-routing.module';
import { TradeFormComponent } from './components/trade-form/trade-form.component';
import { TradePageComponent } from './pages/trade-page/trade-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TradeTableComponent } from './components/trade-table/trade-table.component';

@NgModule({
  declarations: [
    TradeFormComponent,
    TradePageComponent,
    TradeTableComponent
  ],
  imports: [
    CommonModule,
    TradesRoutingModule,
    ReactiveFormsModule,
    NzTableModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzDatePickerModule,
    NzInputNumberModule
  ]
})
export class TradesModule { }
