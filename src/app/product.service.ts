import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class ProductService {

  constructor(private afDB: AngularFireDatabase) { }

  create(product) {
    return this.afDB.list('/products').push(product);
  }
}
