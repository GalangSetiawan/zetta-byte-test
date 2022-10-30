import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../../services/school-service';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import * as _ from 'lodash';
import { SharedService } from '../../services/shared.service';

import { StudentTableListModel } from '../../models/student-table-list.model';
import { StudentDetailModel } from '../../models/student-detail.model';

@Component({ 
  selector: 'app-table-student',
  templateUrl: './table-student.component.html',
  styleUrls: ['./table-student.component.scss']
})
export class TableStudentComponent implements OnInit {

  public studentList:StudentTableListModel[] = [];
  public studentFormArray!:FormArray;
  public schoolList = [];
  public inputForm!:FormGroup;
  public totalDataRemainToAssigned:number = 0;

  constructor(
    private fb: FormBuilder,
    private sharedService: SharedService,
    private schoolService: SchoolService,
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getSchoolList();
  }

  public updateData() {
    this.sharedService.setData(_.cloneDeep(this.studentFormArray.value));

    var findRemainData = this.studentFormArray.value.filter((x:StudentTableListModel) => x.school_correcting_id == null && x.school_correcting_corrector_id == null);
    this.totalDataRemainToAssigned = findRemainData.length;
  }

  public resetData(){
    this.studentFormArray = this.inputForm.get('studentFormArray') as FormArray;
    const control = <FormArray>this.inputForm.controls['studentFormArray'];
    for(let i = control.length-1; i >= 0; i--) {
        control.removeAt(i)
    }
    this.getStudentsTableList();
    
  }


  public initForm(){
    this.inputForm = this.fb.group({
      studentName: null,
      schoolOrigin: null,
      schoolCorrecting: null,
      crossCorrector:null,
      studentFormArray: this.fb.array([])
    });
    
    this.studentFormArray = this.inputForm.get('studentFormArray') as FormArray;
    this.getStudentsTableList();

  }

  public filterSchoolCorrecting(execludeData:StudentTableListModel){    
    var filteredSchool = _.cloneDeep(this.schoolList);
    return _.cloneDeep(filteredSchool.filter((x:any)=> x.school.short_name != execludeData.school_origin_id.short_name))
  }

  public filterCrossConector(execludeData:StudentTableListModel){
    if(execludeData.school_correcting_id != null){
      var filteredStudent = _.cloneDeep(this.studentList);
      return _.cloneDeep(filteredStudent.filter(x=> x.school_origin_id.short_name == execludeData.school_correcting_id.short_name))
    }else{
      return []
    }
  }

  public onSchoolCorectingChange(data:FormGroup){
    data.patchValue({
      school_correcting_corrector_id : null
    })
  }

  public getStudentsTableList() {
    this.schoolService.getStudentsTableList()
    .subscribe((response) => {
      this.studentList = _.cloneDeep(response);

      this.studentList.forEach((data:any) => {
        data.school_correcting_corrector_id = null;
        data.school_correcting_id = null;
        var student =  this.fb.group(data)
        this.studentFormArray.push(student);
      });

      this.updateData();
    });
  }


  public getSchoolList() {
    this.schoolService.getSchoolList().subscribe((response) => {
      this.schoolList = response;
    });
  }


}
