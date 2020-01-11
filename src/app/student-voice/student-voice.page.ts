import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-voice',
  templateUrl: 'student-voice.page.html',
  styleUrls: ['student-voice.page.scss']
})
export class StudentVoicePage implements OnInit {
  
  constructor() {
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/student-voice', JSON.stringify(item)]);
  // }
}
