import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable, ObservableInput, Subject, subscribeOn} from "rxjs";

@Component({
  selector: 'app-value-button',
  templateUrl: './value-button.component.html',
  styleUrls: ['./value-button.component.css']
})
export class ValueButtonComponent implements OnInit {

  @Output() onClick = new EventEmitter<boolean>();

  isClicked: boolean = false;

  @Input() enoughMoney: (() => boolean) | undefined;

  @Input() events: Observable<void> | undefined;

  @Input() value: number = 0;

  ngOnInit(): void {
    this.events!.subscribe(() => {
      this.isClicked = false;
    })
  }

  img1: string = "/assets/images/00.png";
  img5: string = "/assets/images/20.png";
  img10: string = "/assets/images/01.png";
  img25: string = "/assets/images/11.png";
  img100: string = "/assets/images/21.png";
  img500: string = "/assets/images/02.png";
  img1000: string = "/assets/images/12.png";

  img: string = this.img1;

  onClickFunc() {
    if (this.enoughMoney!()) {
      this.onClick.emit();
      this.isClicked = true;

      switch (this.value) {
        case 1:
          this.img = this.img1;
          break
        case 5:
          this.img = this.img5;
          break
        case 10:
          this.img = this.img10;
          break
        case 25:
          this.img = this.img25;
          break
        case 100:
          this.img = this.img100;
          break
        case 500:
          this.img = this.img500;
          break
        case 1000:
          this.img = this.img1000;
          break
      }


    } else {
      alert("zu wenig geld");
    }
  }

}
