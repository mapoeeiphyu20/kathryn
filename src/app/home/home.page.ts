import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  openAbout(about) {
        //this.nav.push(AboutPage, about);
        //this.navCtrl.push(AboutPage, about);
        console.log("I've clicked About Page");
  }
  
  openVideo(video) {
        //this.nav.push(VideoPage, video);
        //this.navCtrl.push(VideoPage, video);
        console.log("I've clicked Video Page");
  }

  openArticle(article) {
        //this.nav.push(ArticlePage, article);
        //this.navCtrl.push(ArticlePage, article);
        console.log("I've clicked Article Page");
  }

  openCourse(course) {
        //this.nav.push(CoursePage, course);
        //this.navCtrl.push(CoursePage, course);
        console.log("I've clicked Course Page");
  }

  openLecturerProfile(lecturerProfile) {
        //this.nav.push(LecturerProfilePage, lecturerProfile);
        //this.navCtrl.push(LecturerProfilePage, lecturerProfile);
        console.log("I've clicked Lecturer-Profile Page");
  }

  openStudentVoice(studentVoice) {
        //this.nav.push(StudentVoicePage, studentVoice);
        //this.navCtrl.push(StudentVoicePage, studentVoice);
        console.log("I've clicked Student-Voice Page");
  }

  openShop(shop) {
        //this.nav.push(ShopPage, shop);
        //this.navCtrl.push(ShopPage, shop);
        console.log("I've clicked Shop Page");
  }

  openEvent(event) {
        //this.nav.push(EventPage, event);
        //this.navCtrl.push(EventPage, event);
        console.log("I've clicked Event Page");
  }

  openProfile(profile) {
        //this.nav.push(ProfilePage, profile);
        //this.navCtrl.push(ProfilePage, profile);
        console.log("I've clicked Profile Page");
  }
}
