import { SchoolDetailModel } from './school-detail.model';
import { StudentDetailModel } from './student-detail.model';


export class StudentTableListModel {

  public _id: string = "";
  public student_id!: StudentDetailModel;
  public school_origin_id!: SchoolDetailModel;
  public school_correcting_id!: SchoolDetailModel;
  public school_correcting_corrector_id!: StudentDetailModel;
  public status: string = "";
  public count_document: number = 0;

  constructor(obj?: Partial<StudentTableListModel>) {
    Object.assign(this, obj);
  }
}