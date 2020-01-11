import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoursePage } from './course.page';

describe('CoursePage', () => {
  let component: CoursePage;
  let fixture: ComponentFixture<CoursePage>;
  let coursePage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    coursePage = fixture.nativeElement;
    const items = coursePage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
