import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TradeModel } from '../../models/trade.model';

@Component({
  selector: 'app-trade-form',
  templateUrl: './trade-form.component.html',
  styleUrls: ['./trade-form.component.scss']
})
export class TradeFormComponent implements OnInit {
  @Input() value: TradeModel | null = null;
  @Output() submitTrade = new EventEmitter<TradeModel>();

  tradeForm!: FormGroup;

  submitForm(): void {
    if (this.value) {
      this.submitTrade.emit(new TradeModel({ ...this.value, ...this.tradeForm.value }));
    } else {
      this.submitTrade.emit(new TradeModel({ ...this.tradeForm.value }));
    }
    this.tradeForm.reset();
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.tradeForm = this.fb.group({
      name: [this.value?.name, [Validators.required]],
      entryDate: [this.value?.entryDate, Validators.required],
      entryPrice: [this.value?.entryPrice, Validators.required],
      exitDate: [this.value?.exitDate, Validators.required],
      exitPrice: [this.value?.exitPrice, Validators.required],
    });
  }

  isDayAllowed (current: Date): boolean {
    return new Date().valueOf() >= current.valueOf();
  }
}
