import { NgxSpinnerService } from "ngx-spinner";

export class BaseComponent {

  constructor(private spinner: NgxSpinnerService) { }

  showSpinner(spinnerName: string, delay: number = 3000) {
    this.spinner.show(spinnerName);

    setTimeout(() => {
      this.spinner.hide(spinnerName);
    }, delay);
  }

  hideSpinner(spinnerName: string) {
    this.spinner.hide(spinnerName);
  }
}

export enum SpinnerType {
  BallAtom = "ba",
  BallScaleMultiple = "bsm",
  BallSpinClockwiseFadeRotating = "bscfr"
}
