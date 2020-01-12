import { Component, OnInit, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';
import { LecturerService } from '../../providers/lecturer-service-mock';
import { LecturerDetailPage } from '../lecturer-detail/lecturer-detail.page';

@Component({
  selector: 'app-lecturer-profile',
  templateUrl: 'lecturer-profile.page.html',
  styleUrls: ['lecturer-profile.page.scss']
})
export class LecturerProfilePage implements OnInit {
  
  //@ViewChild(Nav) nav: Nav;
  lecturers: Array<any>;

  constructor(public service: LecturerService) {
        service.findAll().then(data => this.lecturers = data);
  }

  openLecturerDetail(lecturer) {
        //this.nav.push(LecturerDetailPage, lecturer);
        //this.navCtrl.push(LecturerDetailPage, lecturer);
        console.log("I've clicked Lecturer");
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/lecturer-profile', JSON.stringify(item)]);
  // }
}
