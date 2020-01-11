import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LecturerProfilePage } from './lecturer-profile.page';

describe('LecturerProfilePage', () => {
  let component: LecturerProfilePage;
  let fixture: ComponentFixture<LecturerProfilePage>;
  let lecturerprofilePage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LecturerProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    lecturerprofilePage = fixture.nativeElement;
    const items = lecturerprofilePage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
