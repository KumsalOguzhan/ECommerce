import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Create_Product } from '../../../models/create_product';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private HttpClientService: HttpClientService) { }

  createProduct(product: Create_Product, successCallBack?: any, errorCallBack?: (errorMessage: string) => void) {
    return this.HttpClientService.post<any, any>('products', product).subscribe(result => {
      successCallBack();
    }, (errorResponse: HttpErrorResponse) => {
      const _error: Array<{ key: string, value: Array<string> }> = errorResponse.error;
      let message = '';
      _error.forEach((v, _) => {
        v.value.forEach((_v, __) => {
          message += `${_v}<br>`;
        });
      });
      errorCallBack?.(message);
    });
  }
}
