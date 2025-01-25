import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "plain-text",
  templateUrl: "./plainText.component.html",
  styleUrls: ["./plainText.component.scss"]
})
export class PlainText implements OnInit {
  @Output() onPlainTextChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() shift: number;
  @Input() plainText: string;
  constructor() {}

  ngOnInit() {
  }
  onPlainTextInput() {
    // Emit the updated plaintext when input changes
    this.onPlainTextChange.emit(this.plainText);
  }
}
