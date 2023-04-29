import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  addProductForm!: FormGroup;
  categories: string[] = ['Electronics', 'Clothing', 'Books'];

  constructor(private formBuilder: FormBuilder,private router: Router,  private productService: ProductService) { }

  ngOnInit(): void {
    this.addProductForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const newProduct: Product = {
      id: Number(this.productService.getProductsLength()) + 1,
      ...this.addProductForm.value
    };
    console.log(newProduct)
    this.productService.addProduct(newProduct);
    this.addProductForm.reset();
    this.router.navigate(['/']);

  }
}
