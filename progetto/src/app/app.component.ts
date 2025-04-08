import { Component } from '@angular/core';
import { ProductListComponent } from './product-list-component/product-list-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
