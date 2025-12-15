import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from "ngx-spinner";
import { MatSidenavModule } from "@angular/material/sidenav";
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    ProductsComponent,
    CreateComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: ProductsComponent }
    ]),
    NgxSpinnerModule,
    MatSidenavModule
  ]
})
export class ProductsModule { }
