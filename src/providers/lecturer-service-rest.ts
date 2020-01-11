import 'rxjs/Rx';
import { map } from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {SERVER_URL} from './config';
import {Http} from '@angular/http';

let lecturersURL = SERVER_URL + 'lecturer/';

@Injectable()
export class LecturerService {

    constructor(public http: Http) {

    }

    findAll() {
        alert("findall");
        return this.http.get(lecturersURL)
            .pipe(map(res => res.json()))
            .toPromise();
    }

    findById(id) {
        return this.http.get(lecturersURL + id)
            .pipe(map(res => res.json()))
            .toPromise();
    }

}
