import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Product } from './product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    products: Product[] = [
        { id: 1, name: 'T-shirt', price: 1500, description: 'The Tshirt is a stylish and reliable timepiece that is perfect for any occasion.', category: 'Electronics' },
        { id: 2, name: 'Tell me your dreams', price: 2000, description: 'Wriiten by Sidney Sheldon', category: 'Books' },
        { id: 3, name: 'Iphone', price: 1300, description: 'Affordable phone for all age group', category: 'Electronics' },
        { id: 4, name: 'DVD Player', price: 3400, description: 'Very chic and affordable with lots of features' ,category: 'Electronics'},
        { id: 5, name: 'Yellow Skirt', price: 1500, description: 'Stlish design from best designers', category: 'Clothing' },
    ];

    constructor() { }

    getProducts(): Observable<Product[]> {
        return of(this.products);
    }
    getProductsLength() {
        return (this.products.length)
        };

    getProduct(id: number): Observable<Product> {
        const product = this.products.find(product => product.id == id);
        if (product) {
            return of(product);
        } else {
            return throwError(`Product with id ${id} not found`);
        }
    }

    addProduct(product: Product): void {
        this.products.push(product);
    }
    editProduct(product: Product): Observable<Product[]> {
        console.log(product)
        const index = this.products.findIndex(p => p.id == product.id);
        console.log(index)
        if (index !== -1) {
          this.products[index] = product;
        }
        return of(this.products);
      }
}
