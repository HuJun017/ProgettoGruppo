import { Component, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail-component',
  standalone:true,
  imports: [],
  templateUrl: './product-detail-component.component.html',
  styleUrl: './product-detail-component.component.css'
})
export class ProductDetailComponent {
  @Input() product?: Product;
}