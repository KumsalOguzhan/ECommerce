import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { List_Product } from 'src/app/models/list_product';
import { AlertifyService, MessagePosition, MessageType } from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService, private productService: ProductService, private alertifyService: AlertifyService) {
    super(spinner);
  }

  displayedColumns: string[] = ['name', 'stock', 'price', 'createdDate', 'updatedDate'];
  dataSource!: MatTableDataSource<List_Product>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  async ngOnInit(): Promise<void> {
    this.showSpinner(SpinnerType.BallAtom);

    await this.productService.getAllProducts(
      () => { this.hideSpinner(SpinnerType.BallAtom) },
      (errorMessage: string) => {
        this.hideSpinner(SpinnerType.BallAtom);
        this.alertifyService.message(errorMessage, { dismissOthers: true, messageType: MessageType.Error, position: MessagePosition.TopRight });
      }
    ).then(products => {
      this.dataSource = new MatTableDataSource<List_Product>(products);
    }).catch(err => console.error(err));

    this.dataSource.paginator = this.paginator;
  }
}
