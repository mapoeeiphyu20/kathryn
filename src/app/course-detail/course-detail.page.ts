import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-detail',
  templateUrl: 'course-detail.page.html',
  styleUrls: ['course-detail.page.scss']
})
export class CourseDetailPage implements OnInit {
  
  constructor() {
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/course-detail', JSON.stringify(item)]);
  // }
}
