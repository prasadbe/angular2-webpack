import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Login } from '../interface/login';
import {Observable} from 'rxjs/Observable';
import  'rxjs/add/operator/map';
import  'rxjs/add/operator/do';
import  'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class Service {
    constructor(private http:Http) {
        //console.log(this.http);
    }
    getName(): Observable<Login[]> {
       return this.http.get('/api/module1').map((response:Response) => <Login[]>response.json());
    }
    handleError(data:any) {
        console.log(data);
    }
    extractData(data:Response) {
        console.log(data);
    }
    doLogin(login) {
        return this.http.post('/api/login',login).map((response) => response.json()).toPromise();
    }
}