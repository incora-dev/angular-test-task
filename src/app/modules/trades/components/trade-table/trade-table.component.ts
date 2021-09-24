import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TradeModel } from '../../models/trade.model';

@Component({
  selector: 'app-trade-table',
  templateUrl: './trade-table.component.html',
  styleUrls: ['./trade-table.component.scss']
})
export class TradeTableComponent implements OnInit {
  @Input() data: TradeModel[] = [];
  @Output() editTrade = new EventEmitter<number>();
  @Output() removeTrade = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
  }
}
