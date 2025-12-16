import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Create_Product } from '../../../models/create_product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private HttpClientService: HttpClientService) { }

  createProduct(product: Create_Product, successCallBack?: any) {
    return this.HttpClientService.post<any, any>('products', product).subscribe(result => {
      successCallBack();
      console.log('Product created successfully:', result);
    }, error => {
      console.error('Error creating product:', error);
    });
  }
}
