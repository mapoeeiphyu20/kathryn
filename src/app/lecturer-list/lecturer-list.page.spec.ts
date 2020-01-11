import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LecturerListPage } from './lecturer-list.page';

describe('LecturerListPage', () => {
  let component: LecturerListPage;
  let fixture: ComponentFixture<LecturerListPage>;
  let lecturerListPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LecturerListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    lecturerListPage = fixture.nativeElement;
    const items = lecturerListPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
