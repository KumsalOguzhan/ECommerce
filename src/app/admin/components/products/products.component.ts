import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent {
  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner);
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallScaleMultiple);

    this.httpClientService.get<any[]>('products').subscribe(data => {
      console.log(data);
      this.hideSpinner(SpinnerType.BallScaleMultiple);
    });

    this.httpClientService.get<any[]>('products', "0a87f38f-6aca-4513-86cd-fdef58266feb").subscribe(data => {
      console.log(data);
      this.hideSpinner(SpinnerType.BallScaleMultiple);
    });

    this.httpClientService.post<any, any>('products', { name: "Kalem", price: 200 }).subscribe(data => {
      console.log(data);
      this.hideSpinner(SpinnerType.BallScaleMultiple);
    });

    this.httpClientService.put<any, any>('products', { id: "0a87f38f-6aca-4513-86cd-fdef58266feb", name: "Kalem 2", price: 200 }, "0a87f38f-6aca-4513-86cd-fdef58266feb").subscribe(data => {
      console.log(data);
      this.hideSpinner(SpinnerType.BallScaleMultiple);
    });
  }
}
