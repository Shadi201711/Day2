import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-items.component.html',
  styleUrl: './product-items.component.css'
})
export class ProductItemsComponent {
  products: { name: string; price: string; quantity: number; img: string }[] = [
    { name: 'Product1', price: '100', quantity: 5, img: './assets/Imags/6.jpeg' },
    { name: 'Product2', price: '200', quantity: 2, img: './assets/Imags/5.jpeg' },
    { name: 'Product3', price: '200', quantity: 0, img: './assets/Imags/4.jpeg' },
    { name: 'Product4', price: '300', quantity: 1, img: './assets/Imags/7.jpeg' }
  ];


}
