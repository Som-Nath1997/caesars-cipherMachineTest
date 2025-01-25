import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "cipher-text",
  templateUrl: "./cipherText.component.html",
  styleUrls: ["./cipherText.component.scss"]
})
export class CipherText implements OnInit {
  @Output() onCipherTextChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() shift: number;
  @Input() cipherText: string;
  constructor() {
  }

  ngOnInit() {
  }
  onciphertextInput(){
    this.onCipherTextChange.emit(this.cipherText);
  }
}
