import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

// state-management component
import { loadProducts } from './state/products.actions';
import {
  selectProducts,
  selectProductsLoading,
  selectProductsError
} from './state/products.selectors';
import { Product } from './product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent {

  products$: Observable<Product[]> = this.store.select(selectProducts);
  loading$: Observable<boolean> = this.store.select(selectProductsLoading);
  error$: Observable<any> = this.store.select(selectProductsError);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
  }

}
