import { SchoolDetailModel } from './school-detail.model';

export class SchoolTableModel {

  public short_name:string = "";
  public _id:string = "";
  public students:number = 0;
  public correction:number = 0;
  public diff:number = 0;

  constructor(obj?: Partial<SchoolTableModel>) {
    Object.assign(this, obj);
  }
}