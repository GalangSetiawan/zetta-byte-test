import { SchoolDetailModel } from './school-detail.model';

export class SchoolModel {

  public school!: SchoolDetailModel;

  constructor(obj?: Partial<SchoolModel>) {
    Object.assign(this, obj);
  }
}