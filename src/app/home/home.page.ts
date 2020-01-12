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

}
