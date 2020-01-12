import {Injectable} from '@angular/core';
import events from './mock-events';

@Injectable()
export class EventService {

    findAll() {
        return Promise.resolve(events);
    }

    findById(id) {
        return Promise.resolve(events[id - 1]);
    }

}