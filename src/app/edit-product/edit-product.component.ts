import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { ProductService } from '../product.service';
import { Product } from '../product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  categories: string[] = ['Electronics', 'Clothing', 'Books'];
  editProductForm!: FormGroup;
  product: Product | any;
  productId! : number
constructor(private formBuilder: FormBuilder,private route: ActivatedRoute, private router: Router,  private productService: ProductService) { 
     }
  ngOnInit() {
    this.productId = this.route.snapshot.params['productId'];
    this.productService.getProduct(this.productId)
    .subscribe(product => this.product = product);
    this.editProductForm = this.formBuilder.group({
      id: [this.product.id],
      name: [this.product.name, Validators.required],
      description: [this.product.description, Validators.required],
      price: [this.product.price, Validators.required,],
      category: [this.product.category, Validators.required]
    });
    
  }
  onSubmit(): void {
    const updatedProduct = this.editProductForm.value
    console.log(updatedProduct)
    this.productService.editProduct(updatedProduct).subscribe(() => {

    this.router.navigate(['/']);
  });

  }
}
