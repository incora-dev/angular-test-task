import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { ChartsModule } from 'ng2-charts';
import { TradesRoutingModule } from './trades-routing.module';
import { TradeFormComponent } from './components/trade-form/trade-form.component';
import { TradePageComponent } from './pages/trade-page/trade-page.component';
import { TradeTableComponent } from './components/trade-table/trade-table.component';
import { BalanceChartComponent } from './components/balance-chart/balance-chart.component';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [
    TradeFormComponent,
    TradePageComponent,
    TradeTableComponent,
    BalanceChartComponent
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
    NzInputNumberModule,
    NzButtonModule,
    ChartsModule
  ]
})
export class TradesModule { }
