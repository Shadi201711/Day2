import { Component, Output,EventEmitter } from '@angular/core';
import { ProductItemsComponent } from './product-items/product-items.component';
import { IProduct } from '../../Models/iproduct';
import { productsList } from '../../Models/productsList';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductItemsComponent,CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
products :IProduct[] = [];

constructor(){
  this.products = productsList;
}
// @Output() ProductEvent = new EventEmitter();
// SendData(){
//   this.ProductEvent.emit(this.ProductEvent);
// }
}
