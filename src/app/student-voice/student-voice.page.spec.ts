import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudentVoicePage } from './student-voice.page';

describe('StudentVoicePage', () => {
  let component: StudentVoicePage;
  let fixture: ComponentFixture<StudentVoicePage>;
  let studentVoicePage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentVoicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentVoicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    studentVoicePage = fixture.nativeElement;
    const items = studentVoicePage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
