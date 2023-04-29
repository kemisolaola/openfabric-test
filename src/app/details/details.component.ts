import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { ProductService } from '../product.service';
import { Product } from '../product';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  product: Product | any;
  productId! : number
constructor(private route: ActivatedRoute, private productService: ProductService) { 
     }
  ngOnInit() {
    this.productId = this.route.snapshot.params['productId'];
    this.productService.getProduct(this.productId)
    .subscribe(product => this.product = product);
  }
}
