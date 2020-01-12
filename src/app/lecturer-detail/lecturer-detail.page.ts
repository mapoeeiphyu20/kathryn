import { Component, OnInit } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { LecturerService } from '../../providers/lecturer-service-mock';

@Component({
  selector: 'app-lecturer-detail',
  templateUrl: 'lecturer-detail.page.html',
  styleUrls: ['lecturer-detail.page.scss']
})
export class LecturerDetailPage implements OnInit {

  lecturer: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: LecturerService) {
        this.lecturer = this.navParams.data;
        service.findById(this.lecturer.id).then(
            lecturer => this.lecturer = lecturer
        );
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/lecturer-detail', JSON.stringify(item)]);
  // }
}
