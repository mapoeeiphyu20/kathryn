import 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { SERVER_URL } from './config';
import { Http, Headers, RequestOptions } from '@angular/http';

let shopsURL = SERVER_URL + 'shop/';

@Injectable()
export class ShopService {

    constructor(public http: Http) {
        this.http = http;
    }

    findAll() {
        alert("findall");
        return this.http.get(shopsURL)
            .pipe(map(res => res.json()))
            .toPromise();
    }

    findByName(key:string) {
        return this.http.get(shopsURL + "?key=" + key)
            .pipe(map(res => res.json()))
            .toPromise();
    }

    findById(id) {
        return this.http.get(shopsURL + id)
            .pipe(map(res => res.json()))
            .toPromise();
    }

}
