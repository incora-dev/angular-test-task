import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { NzModalService } from 'ng-zorro-antd/modal';
import { TradeModel } from '../../models/trade.model';

@Component({
  selector: 'app-trade-page',
  templateUrl: './trade-page.component.html',
  styleUrls: ['./trade-page.component.scss']
})
export class TradePageComponent implements OnInit {
  data: TradeModel[] = [];
  index: number = 0;
  isEditModalVisible = false;
  tradeToEdit: TradeModel | null = null;

  balanceChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Balance' },
  ];

  constructor(private modal: NzModalService) { }

  ngOnInit(): void {
  }

  openNewTradeModal() {
    this.tradeToEdit = null;
    this.isEditModalVisible = true;
  }

  updateTrade(trade: TradeModel) {
    if (trade.id) { // update
      this.data = this.data.map(el => trade.id === el.id ? trade : el);
    } else { // create new one
      this.index++;
      this.data = [new TradeModel({ ...trade, id: this.index }), ...this.data];
    }
    this.closeModal();
  }

  onEditTrade(id: number) {
    this.tradeToEdit = this.data.find(el => el.id === id) ?? null;
    this.isEditModalVisible = true;
  }

  closeModal() {
    this.isEditModalVisible = false;
    this.tradeToEdit = null;
  }

  showConfirm(id: number): void {
    this.modal.confirm({
      nzTitle: '<i>Do you Want to delete this trade?</i>',
      nzOnOk: () => {
        this.data = this.data.filter((trade) => trade.id !== id)
      }
    });
  }
}
