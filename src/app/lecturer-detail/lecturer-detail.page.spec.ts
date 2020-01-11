import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LecturerDetailPage } from './lecturer-list.page';

describe('LecturerDetailPage', () => {
  let component: LecturerDetailPage;
  let fixture: ComponentFixture<LecturerDetailPage>;
  let lecturerDetailPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LecturerDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    lecturerDetailPage = fixture.nativeElement;
    const items = lecturerDetailPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
