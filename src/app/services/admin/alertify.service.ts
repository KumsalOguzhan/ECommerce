import { Injectable } from '@angular/core';
declare var alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  message(message: string, options: Partial<AlertifyOptions>): void {
    const defaultOptions = new AlertifyOptions();
    const messageType = options.messageType || defaultOptions.messageType;
    const position = options.position || defaultOptions.position;
    const delay = options.delay !== undefined ? options.delay : defaultOptions.delay;

    alertify.set('notifier', 'position', position);
    alertify.set('notifier', 'delay', delay);

    const msg = alertify[messageType](message);

    if (options.dismissOthers) {
      msg.dismissOthers();
    }
  }

  dismiss(): void {
    alertify.dismissAll();
  }
}

export class AlertifyOptions {
  messageType: MessageType = MessageType.Message;
  position: MessagePosition = MessagePosition.BottomRight;
  delay: number = 3;
  dismissOthers: boolean = false;
}

export enum MessageType {
  Success = "success",
  Error = "error",
  Warning = "warning",
  Message = "message",
  Notify = "notify"
}

export enum MessagePosition {
  TopRight = "top-right",
  TopLeft = "top-left",
  BottomRight = "bottom-right",
  BottomLeft = "bottom-left",
  TopCenter = "top-center",
  BottomCenter = "bottom-center"
}
