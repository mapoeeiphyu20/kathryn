import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VideoPage } from './video.page';

describe('VideoPage', () => {
  let component: VideoPage;
  let fixture: ComponentFixture<VideoPage>;
  let videoPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    videoPage = fixture.nativeElement;
    const items = videoPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
