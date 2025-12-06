import { Component } from '@angular/core';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ECommerce';

  constructor(private toastrService: CustomToastrService) {
    toastrService.message("Hi!", "Welcome", { messageType: ToastrMessageType.Info, position: ToastrPosition.TopRight });
    toastrService.message("Hi!", "Welcome", { messageType: ToastrMessageType.Error, position: ToastrPosition.BottomRight });
    toastrService.message("Hi!", "Welcome", { messageType: ToastrMessageType.Success, position: ToastrPosition.BottomLeft });
    toastrService.message("Hi!", "Welcome", { messageType: ToastrMessageType.Warning, position: ToastrPosition.TopLeft });
  }
}
