import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CourseDetailPage } from './course-detail.page';

describe('CourseDetailPage', () => {
  let component: CourseDetailPage;
  let fixture: ComponentFixture<CourseDetailPage>;
  let courseDetailPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    courseDetailPage = fixture.nativeElement;
    const items = courseDetailPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
