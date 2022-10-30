export class CrossCorrectorModel {

    public _id: string = "";
    public first_name: string = "";
    public last_name: string = "";
    public full_name: string = "";

constructor(obj?: Partial<CrossCorrectorModel>) {
    Object.assign(this, obj);
}
}