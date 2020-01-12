import 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { SERVER_URL } from './config';
import { Http } from '@angular/http';

let eventsURL = SERVER_URL + 'event/';

@Injectable()
export class EventService {

    constructor(public http: Http) {

    }

    findAll() {
        alert("findall");
        return this.http.get(eventsURL)
            .pipe(map(res => res.json()))
            .toPromise();
    }

    findById(id) {
        return this.http.get(eventsURL + id)
            .pipe(map(res => res.json()))
            .toPromise();
    }

}
