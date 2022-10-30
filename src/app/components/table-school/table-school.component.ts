import { Component, OnInit, Input } from '@angular/core';
import { SchoolService } from '../../services/school-service';
import { StudentTableListModel } from '../../models/student-table-list.model';
import { SharedService } from '../../services/shared.service';
import { SchoolDetailModel } from '../../models/school-detail.model';
import { SchoolCorrectorModel } from '../../models/school-corrector.model';
import { CrossCorrectorModel } from '../../models/cross-correctors-details.model';
import { SchoolTableModel } from '../../models/school-table-list.model';

@Component({
  selector: 'app-table-school',
  templateUrl: './table-school.component.html',
  styleUrls: ['./table-school.component.scss'],

})
export class TableSchoolComponent implements OnInit {

  public schoolTableList:SchoolTableModel[] = [];
  public studentFormArray:StudentTableListModel[] = [];

  constructor(
    private schoolService: SchoolService,
    private sharedService: SharedService,
  ) { }

  ngOnInit(): void {
    this.getSchoolTableList();
    this.getUpdatedDataStudent();
  }

  public getUpdatedDataStudent(){
    this.sharedService.sharedData$
    .subscribe(sharedData => {
      console.log('sharedData ===>', sharedData);

      if(sharedData.length > 0){
        this.studentFormArray = sharedData;
      }else{
        this.initStudentsTableList();
      }   

      this.schoolTableList.forEach(schoolTable => {

        var findStudent = this.studentFormArray.filter(x=> x.school_origin_id.short_name == schoolTable.short_name);
        schoolTable.students = findStudent.length

        var findCorrection = 0;
        this.studentFormArray.forEach(student => {
          if(student.school_correcting_id != null && student.school_correcting_corrector_id != null){
            if(student.school_correcting_id.short_name == schoolTable.short_name){
              findCorrection++;
            }
          }
        });
        schoolTable.correction = findCorrection;

        schoolTable.diff = schoolTable.correction - schoolTable.students;
        
      });
      

    });
  }
  

  public initStudentsTableList() {
    this.schoolService.getStudentsTableList()
    .subscribe((response) => {
      this.studentFormArray = response;
    });
  }



  public getSchoolTableList() {
    this.schoolService.getSchoolTableList().subscribe((response) => {
      this.schoolTableList = response;
    });
  }



}
