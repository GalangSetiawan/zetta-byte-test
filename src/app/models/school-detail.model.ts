
export class SchoolDetailModel {

    public _id: string = "";
    public short_name: string = "";
  
  
    constructor(obj?: Partial<SchoolDetailModel>) {
      Object.assign(this, obj);
    }
  }