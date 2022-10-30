import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { Observable } from 'rxjs';


@Injectable()
export class CustomerService {
    constructor(private http: HttpClient) { }

    getCustomersLarge() {
        return this.http.get<any>('https://primeng-tablefilter-demo.stackblitz.io/assets/customers-large.json')
            .toPromise()
            .then(res => <Customer[]>res.data)
            .then(data => { return data; });
    }


    getMasterStudent(): Observable<any> {
        return this.http.get('src/assets/sample-data/students-table-list.json');
    }
    
}
