interface TradeModelOptions {
  id?: number,
  name: string,
  entryDate: Date,
  entryPrice: number,
  exitDate: Date,
  exitPrice: number,
}
export class TradeModel {
  public id: number | undefined;
  public name: string;
  public entryDate: Date;
  public entryPrice: number;
  public exitDate: Date;
  public exitPrice: number;

  constructor({
    id,
    name,
    entryDate,
    entryPrice,
    exitDate,
    exitPrice,
  }: TradeModelOptions){
    this.id = id;
    this.name = name;
    this.entryDate = entryDate;
    this.entryPrice = entryPrice;
    this.exitDate = exitDate;
    this.exitPrice = exitPrice;
  }

  get profit(): number {
    return this.entryPrice - this.exitPrice ?? 0;
  }
}
