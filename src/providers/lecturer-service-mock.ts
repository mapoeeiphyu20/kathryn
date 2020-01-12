import {Injectable} from '@angular/core';
import lecturers from './mock-lecturers';

@Injectable()
export class LecturerService {

    findAll() {
        return Promise.resolve(lecturers);
    }

    findById(id) {
        return Promise.resolve(lecturers[id - 1]);
    }

}