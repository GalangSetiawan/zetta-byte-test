import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TableStudentComponent } from './components/table-student/table-student.component';
import { TableSchoolComponent } from './components/table-school/table-school.component';


const routes: Routes = [
  { path: 'student', component: TableStudentComponent }, 
  { path: 'school', component: TableSchoolComponent }, 
  { path: '', component: TableStudentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
