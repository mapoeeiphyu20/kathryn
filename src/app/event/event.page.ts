import { Component, OnInit } from '@angular/core';
import { Nav } from 'ionic-angular';
import { EventService } from '../../providers/event-service-mock';
import { LecturerDetailPage } from '../lecturer-detail/lecturer-detail.page';

@Component({
  selector: 'app-event',
  templateUrl: 'event.page.html',
  styleUrls: ['event.page.scss']
})
export class EventPage implements OnInit {

  //@ViewChild(Nav) nav: Nav;
  events: Array<any>;
  
  constructor(public service: EventService) {
        service.findAll().then(data => this.events = data);
  }

  openEventDetail(event) {
        //this.nav.push(EventDetailPage, event);
        //this.navCtrl.push(EventDetailPage, event);
        console.log("I've clicked Event");
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/event', JSON.stringify(item)]);
  // }
}
