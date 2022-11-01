import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.css']
})
export class WheelComponent  {

  wheelNumbers: number[] = [0, 26, 3, 35, 12, 28, 7, 29, 18, 22, 9, 31, 14, 20, 1, 33, 16, 24, 5, 10, 23, 8, 30, 11, 36, 13, 27, 6, 34, 17, 25, 2, 21, 4, 19, 15, 32];

  @ViewChild("wheel") wheel!: ElementRef;
  @ViewChild("ballTrack") ballTrack!: ElementRef;

  @Output() winNum: EventEmitter<number> = new EventEmitter();

  @Output() running: EventEmitter<boolean> = new EventEmitter();

  spinWheel() {
    this.running.emit();

    let winningNum = Math.floor(Math.random() * 36);
    console.log(winningNum);

    let degree: number;

    for (let i = 0; i < this.wheelNumbers.length; i++) {
      if (this.wheelNumbers[i] === winningNum) {
        degree = (i * 9.73) + 362;
      }
    }
    this.wheel.nativeElement.style.cssText = "animation: wheelRotate 5s linear infinite;";
    this.ballTrack.nativeElement.style.cssText = "animation: ballRotate 1s linear infinite;";

    setTimeout(() => {
      let style = document.createElement("style");

      style.innerText = "@keyframes ballStop {from {transform: rotate(0deg);}to{transform: rotate(-" + degree + "deg);}}";
      document.head.appendChild(style);
    }, 2000);

    setTimeout(() => {
      if(this.wheel == undefined || this.ballTrack == undefined) return;

      this.ballTrack.nativeElement.style.cssText = "animation: ballStop 3s linear;";
    }, 6000);

    setTimeout(() => {
      if(this.wheel == undefined || this.ballTrack == undefined) return;

      this.ballTrack.nativeElement.style.cssText = "transform: rotate(-" + degree + "deg);";

      //tell main component witch number had won
      this.winNum.emit(winningNum);
    }, 9000);

    setTimeout(() => {
      if(this.wheel == undefined || this.ballTrack == undefined) return;

      this.wheel.nativeElement.style.cssText = "";
    }, 10000);
  }

}
