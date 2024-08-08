import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartViewComponent } from './cart-view/cart-view.component';
import { MatCard } from '@angular/material/card';
import { MatListModule} from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    CartViewComponent
  ],
  imports: [
    CommonModule,
    MatCard,
    MatListModule,
    MatButtonModule
  ]
})
export class CartModule { }
