import {Injectable} from '@angular/core';
import shops from './mock-shops';

@Injectable()
export class ShopService {

    findAll() {
        return Promise.resolve(shops);
    }

    findById(id) {
        return Promise.resolve(shops[id - 1]);
    }

    findByName(searchKey: string) {
    let key: string = searchKey.toUpperCase();
    return Promise.resolve(shops.filter((shop: any) =>
        (shop.title +  ' ' +shop.address +  ' ' + shop.city + ' ' + shop.description).toUpperCase().indexOf(key) > -1));
  	}

}