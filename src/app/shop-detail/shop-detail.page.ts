import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { ShopService } from '../../providers/shop-service-mock';

@Component({
  selector: 'app-shop-detail',
  templateUrl: 'shop-detail.page.html',
  styleUrls: ['shop-detail.page.scss']
})
export class ShopDetailPage implements OnInit {

  shop: any;
  
  constructor(public navParams: NavParams, public service: ShopService) {
        this.shop = this.navParams.data;
        service.findById(this.shop.id).then(
            shop => this.shop = shop
        );
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/shop-detail', JSON.stringify(item)]);
  // }
}
