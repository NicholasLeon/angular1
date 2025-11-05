import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, DecimalPipe } from '@angular/common';
import { ProductsData } from '../../services/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, NgIf, DecimalPipe],
  templateUrl: './products.html',
})
export class Products implements OnInit {
  products: any[] = [];

  constructor(private dataProducts: ProductsData) {}

  ngOnInit(): void {
    this.dataProducts.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        console.log('Gagal Mengambil Data', err);
      },
    });
  }
}
