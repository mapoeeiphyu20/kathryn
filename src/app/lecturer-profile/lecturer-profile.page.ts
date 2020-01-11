import { Component, OnInit } from '@angular/core';
import {NavController} from 'ionic-angular';
import {LecturerService} from '../../providers/lecturer-service-mock';
import {LecturerDetailPage} from '../lecturer-detail/lecturer-detail.page';

@Component({
  selector: 'app-lecturer-profile',
  templateUrl: 'lecturer-profile.page.html',
  styleUrls: ['lecturer-profile.page.scss']
})
export class LecturerProfilePage implements OnInit {

  lecturers: Array<any>;

  constructor(public navCtrl: NavController, public service: LecturerService) {
        service.findAll().then(data => this.lecturers = data);
  }

  openLecturerDetail(lecturer) {
        this.navCtrl.push(LecturerDetailPage, lecturer);
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/lecturer-profile', JSON.stringify(item)]);
  // }
}
