import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";

@Component({
  selector: "shift",
  templateUrl: "./shift.component.html",
  styleUrls: ["./shift.component.scss"]
})
export class Shift implements OnInit {
  @Output() onShiftChange: EventEmitter<number> = new EventEmitter<number>();
  shiftOptions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Example shift values

  constructor() {}

  ngOnInit() {}

  onShiftSelected(event: any) {
    const selectedShift = +event.target.value; // Get the selected value
    this.onShiftChange.emit(selectedShift); // Emit the shift change
  }
}
