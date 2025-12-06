import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor(private toastr: ToastrService) { }

  message(message: string, title: string, toastrOptions: Partial<ToastrOptions>): void {
    const messageType = toastrOptions.messageType || ToastrMessageType.Info;
    const position = toastrOptions.position || ToastrPosition.BottomRight;

    this.toastr[messageType](message, title, {
      positionClass: position
    });
  }

  dismiss(): void {
    this.toastr.clear();
  }
}

export class ToastrOptions {
  messageType: ToastrMessageType = ToastrMessageType.Info;
  position: ToastrPosition = ToastrPosition.BottomRight;
}

export enum ToastrMessageType {
  Success = "success",
  Error = "error",
  Info = "info",
  Warning = "warning"
}

export enum ToastrPosition {
  TopRight = "toast-top-right",
  TopLeft = "toast-top-left",
  BottomRight = "toast-bottom-right",
  BottomLeft = "toast-bottom-left",
  TopCenter = "toast-top-center",
  BottomCenter = "toast-bottom-center",
  TopFullWidth = "toast-top-full-width",
  BottomFullWidth = "toast-bottom-full-width"
}