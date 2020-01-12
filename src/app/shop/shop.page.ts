import { Component, OnInit } from '@angular/core';
import { Nav } from 'ionic-angular';
import { ShopService } from '../../providers/shop-service-mock';
import { ShopDetailPage } from '../shop-detail/shop-detail.page';

@Component({
  selector: 'app-shop',
  templateUrl: 'shop.page.html',
  styleUrls: ['shop.page.scss']
})
export class ShopPage implements OnInit {
  
  //@ViewChild(Nav) nav: Nav;
  shops: Array<any>;

  searchKey: string = "";

  //constructor(public service: ShopService) {
        //service.findAll().then(data => this.shops = data);
  //}

  constructor(public service: ShopService) {
        this.findAll();
  }

  onInput(shop) {
        this.service.findByName(this.searchKey)
            .then(data => {
                this.shops = data;
            })
            .catch(error => alert(JSON.stringify(error)));

            console.log("onInput is worked.");
  }

  onCancel(shop) {
      this.findAll();
      console.log("onCancel is worked.");
  }

  findAll() {
        this.service.findAll()
            .then(data => this.shops = data)
            .catch(error => alert(error));
  }

  openShopDetail(shop) {
        //this.nav.push(ShopDetailPage, shop);
        //this.navCtrl.push(ShopDetailPage, shop);
        console.log("I've clicked Shop");
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/shop', JSON.stringify(item)]);
  // }
}
