import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class SchoolService {
    constructor(private http: HttpClient) { }

    getStudentsTableList(): Observable<any> {
        return this.http.get('assets/sample-data/students-table-list.json');
    }

    getSchoolTableList(): Observable<any> {
        return this.http.get('assets/sample-data/school-table-list.json');
    }

    getSchoolList(): Observable<any> {
        return this.http.get('assets/sample-data/school-list.json');
    }

    getSchoolCorrectorList(): Observable<any> {
        return this.http.get('assets/sample-data/school-corrector-list.json');
    }

    getCorrectorList(): Observable<any> {
        return this.http.get('assets/sample-data/corrector-list.json');
    }
    
}
