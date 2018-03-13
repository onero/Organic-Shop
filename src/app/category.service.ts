import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class CategoryService {

  constructor(private afDB: AngularFireDatabase) {
  }

  getCategories() {
    return this.afDB.list('/categories',
      ref => ref.orderByChild('name'))
      .snapshotChanges();
  }

}
