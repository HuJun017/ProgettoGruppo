import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product';
import { ProductDetailComponent } from '../product-detail-component/product-detail-component.component';
 // Importa il componente standalone

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductDetailComponent],  // Assicurati che ProductDetailComponent sia incluso qui
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponent {
  products: Product[] = [
    { name: 'Laptop', price: 999.99, description: 'Laptop con 16GB RAM' },
    { name: 'Mouse', price: 29.99, description: 'Mouse wireless' },
    { name: 'Tastiera', price: 49.99, description: 'Tastiera meccanica' },
    { name: 'Monitor', price: 199.99, description: 'Monitor 24 pollici Full HD' },
    { name: 'Stampante', price: 89.99, description: 'Stampante multifunzione' }
  ];

  selectedProduct?: Product;

  selectProduct(product: Product) {
    this.selectedProduct = product;
  }
}
