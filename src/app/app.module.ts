import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { DetailsComponent } from './details/details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule} from '@angular/material/card'; // 
import { NavbarComponent } from './navbar/navbar.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import { EditProductComponent } from './edit-product/edit-product.component';


const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: 'details/:productId',
    component: DetailsComponent
  },
  {
    path: 'add-product',
    component: AddProductComponent
  },
  {
    path: 'edit-product/:productId',
    component: EditProductComponent
  },

]
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    DetailsComponent,
    AddProductComponent,
    NavbarComponent,
    ProductsComponent,
    EditProductComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatSelectModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    MatToolbarModule,
    MatCardModule,    
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
