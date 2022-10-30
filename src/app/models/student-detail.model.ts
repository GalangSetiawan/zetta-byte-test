export class StudentDetailModel {

  public _id: string = "";
  public first_name: string = "";
  public last_name: string = "";
  public full_name: string = "";

  constructor(obj?: Partial<StudentDetailModel>) {
    Object.assign(this, obj);
  }
}