import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'About Us',
      url: '/about',
      icon: 'information-circle'
    },
    {
      title: 'Video',
      url: '/home',
      icon: 'logo-youtube'
    },
    {
      title: 'Article',
      url: '/payment',
      icon: 'paper'
    },
    {
      title: 'Courses',
      url: '/about',
      icon: 'book'
    },
    {
      title: 'Lecturer Profile',
      url: '/lecturer-profile',
      icon: 'contacts'
    },
    {
      title: 'Student Voices',
      url: '/payment',
      icon: 'notifications'
    },
    {
      title: 'Shop',
      url: '/shop',
      icon: 'cart'
    },
    {
      title: 'Events',
      url: '/event',
      icon: 'calendar'
    },
    {
      title: 'Profile',
      url: '/profile',
      icon: 'person'
    },
    {
      title: 'Logout',
      url: '/profile',
      icon: 'exit'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
