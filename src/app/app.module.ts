import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SchoolService } from './services/school-service';
import { SharedService } from './services/shared.service';

import { AppRoutingModule } from './app-routing.module';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import {AutoCompleteModule} from 'primeng/autocomplete';


import { AppComponent }   from './app.component';  
import { TableStudentComponent } from './components/table-student/table-student.component';
import { TableSchoolComponent } from './components/table-school/table-school.component';

@NgModule({
  declarations: [
    AppComponent,
    TableStudentComponent,
    TableSchoolComponent,
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    AutoCompleteModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SchoolService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
