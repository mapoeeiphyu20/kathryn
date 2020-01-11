import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopDetailPage } from './shop-detail.page';

describe('ShopDetailPage', () => {
  let component: ShopDetailPage;
  let fixture: ComponentFixture<ShopDetailPage>;
  let shopDetailPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    shopDetailPage = fixture.nativeElement;
    const items = shopDetailPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
