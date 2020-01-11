import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: 'course.page.html',
  styleUrls: ['course.page.scss']
})
export class CoursePage implements OnInit {
  
  constructor() {
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/course', JSON.stringify(item)]);
  // }
}
