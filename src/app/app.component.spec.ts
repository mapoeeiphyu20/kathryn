import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { DOCUMENT } from '@angular/common';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let statusBarSpy, splashScreenSpy, platformReadySpy, platformSpy;

  beforeEach(async(() => {
    statusBarSpy = jasmine.createSpyObj('StatusBar', ['styleDefault']);
    splashScreenSpy = jasmine.createSpyObj('SplashScreen', ['hide']);
    platformReadySpy = Promise.resolve();
    platformSpy = jasmine.createSpyObj('Platform', { ready: platformReadySpy });

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: StatusBar, useValue: statusBarSpy },
        { provide: SplashScreen, useValue: splashScreenSpy },
        { provide: Platform, useValue: platformSpy },
      ],
      imports: [ RouterTestingModule.withRoutes([])],
    }).compileComponents();
  }));

  it('should create the app', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should initialize the app', async () => {
    TestBed.createComponent(AppComponent);
    expect(platformSpy.ready).toHaveBeenCalled();
    await platformReadySpy;
    expect(statusBarSpy.styleDefault).toHaveBeenCalled();
    expect(splashScreenSpy.hide).toHaveBeenCalled();
  });

  it('should have menu labels', async () => {
    const fixture = await TestBed.createComponent(AppComponent);
    await fixture.detectChanges();
    const app = fixture.nativeElement;
    const menuItems = app.querySelectorAll('ion-label');
    expect(menuItems.length).toEqual(2);
    expect(menuItems[0].textContent).toContain('Home');
    expect(menuItems[1].textContent).toContain('AboutUs');
    expect(menuItems[2].textContent).toContain('Videos');
    expect(menuItems[3].textContent).toContain('Article');
    expect(menuItems[4].textContent).toContain('Courses');
    expect(menuItems[5].textContent).toContain('LecturerProfile');
    expect(menuItems[6].textContent).toContain('StudentVoices');
    expect(menuItems[7].textContent).toContain('Shops');
    expect(menuItems[8].textContent).toContain('Events');
    expect(menuItems[9].textContent).toContain('Profile');
  });

  it('should have urls', async () => {
    const fixture = await TestBed.createComponent(AppComponent);
    await fixture.detectChanges();
    const app = fixture.nativeElement;
    const menuItems = app.querySelectorAll('ion-item');
    expect(menuItems.length).toEqual(2);
    expect(menuItems[0].getAttribute('ng-reflect-router-link')).toEqual('/home');
    expect(menuItems[1].getAttribute('ng-reflect-router-link')).toEqual('/about');
    expect(menuItems[2].getAttribute('ng-reflect-router-link')).toEqual('/video');
    expect(menuItems[3].getAttribute('ng-reflect-router-link')).toEqual('/article');
    expect(menuItems[4].getAttribute('ng-reflect-router-link')).toEqual('/course');
    expect(menuItems[5].getAttribute('ng-reflect-router-link')).toEqual('/lecturer-profile');
    expect(menuItems[6].getAttribute('ng-reflect-router-link')).toEqual('/student-voice');
    expect(menuItems[7].getAttribute('ng-reflect-router-link')).toEqual('/shop');
    expect(menuItems[8].getAttribute('ng-reflect-router-link')).toEqual('/event');
    expect(menuItems[9].getAttribute('ng-reflect-router-link')).toEqual('/profile');
  });

});
