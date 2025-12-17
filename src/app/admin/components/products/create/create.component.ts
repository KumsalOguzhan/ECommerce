import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { AlertifyService, MessagePosition, MessageType } from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent extends BaseComponent implements OnInit {

  constructor(private productService: ProductService, spinner: NgxSpinnerService, private alertify: AlertifyService) {
    super(spinner);
  }

  ngOnInit(): void {
  }
  create(nameInput: HTMLInputElement, priceInput: HTMLInputElement, stockInput: HTMLInputElement) {
    this.showSpinner(SpinnerType.BallScaleMultiple);
    const name = nameInput.value;
    const price = parseFloat(priceInput.value);
    const stock = parseInt(stockInput.value, 10);

    this.productService.createProduct({ name, price, stock }, () => {
      this.hideSpinner(SpinnerType.BallScaleMultiple);
      this.alertify.message('Product created successfully.', { position: MessagePosition.TopRight });
    }, (errorMessage: string) => {
      this.hideSpinner(SpinnerType.BallScaleMultiple);
      this.alertify.message(errorMessage, { position: MessagePosition.TopRight, messageType: MessageType.Error });
    });
  }
}
