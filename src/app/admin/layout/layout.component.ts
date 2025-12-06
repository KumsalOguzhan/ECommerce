import { Component, OnInit } from '@angular/core';
import { AlertifyService, MessagePosition, MessageType } from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.alertify.message("Layout component initialized", { messageType: MessageType.Success, delay: 5, position: MessagePosition.TopRight });
  }
}
