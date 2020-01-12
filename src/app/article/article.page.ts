import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: 'article.page.html',
  styleUrls: ['article.page.scss']
})
export class ArticlePage implements OnInit {

  tab1: any = 'VideoPage';
  tab2: any = 'AboutPage';
  
  constructor() {
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/article', JSON.stringify(item)]);
  // }
}
