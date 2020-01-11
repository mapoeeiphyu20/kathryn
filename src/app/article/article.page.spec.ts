import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArticlePage } from './article.page';

describe('ArticlePage', () => {
  let component: ArticlePage;
  let fixture: ComponentFixture<ArticlePage>;
  let articlePage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArticlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    articlePage = fixture.nativeElement;
    const items = articlePage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
