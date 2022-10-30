import { SchoolDetailModel } from './school-detail.model';
import { CrossCorrectorModel } from './cross-correctors-details.model';

export class SchoolCorrectorModel {

  public school!: SchoolDetailModel;
  public cross_correctors: CrossCorrectorModel[] = [];

  constructor(obj?: Partial<SchoolCorrectorModel>) {
    Object.assign(this, obj);
  }
}