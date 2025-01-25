import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Caesar's Cipher";

  shift: number = -1;  // Initial shift state as -1 means no shift selected
  plainText: string = '';
  cipherText: string = '';

  // This will be triggered only when the shift value changes
  onShiftChange(i: number) {
    this.shift = i;

    // Only trigger encryption or decryption when a valid shift is selected
    if (this.shift !== -1) {
      if (this.plainText) {
        this.cipherText = this.encrypt(this.plainText);
      } else if (this.cipherText) {
        this.plainText = this.decrypt(this.cipherText);
      }
    }
  }

  // Called when plain text is modified by the user
  onPlainTextChange(text: string) {
    this.plainText = text;
    if (this.shift !== -1 && this.plainText) {
      this.cipherText = this.encrypt(this.plainText);
    } else {
      this.cipherText = '';
    }
  }

  // Called when cipher text is modified by the user
  onCipherTextChange(text: string) {
    this.cipherText = text;
    if (this.shift !== -1 && this.cipherText) {
      this.plainText = this.decrypt(this.cipherText);
    } else {
      this.plainText = '';
    }
  }

  // Encrypt function for cipher text (case-sensitive logic)
  encrypt(plainText: string) {
    let cipherArr = [];
    let cipherLetter;

    plainText.split("").map(letter => {
      let code = letter.charCodeAt(0);

      if (letter === " ") {
        return cipherArr.push(letter); // Spaces remain unchanged
      }

      // Uppercase letters (A-Z)
      if (code >= 65 && code <= 90) {
        cipherLetter = String.fromCharCode(((code - 65 + this.shift) % 26 + 26) % 26 + 65);
      }
      // Lowercase letters (a-z)
      else if (code >= 97 && code <= 122) {
        cipherLetter = String.fromCharCode(((code - 97 + this.shift) % 26 + 26) % 26 + 97);
      }

      return cipherArr.push(cipherLetter);
    });
    return cipherArr.join("");
  }

  // Decrypt function for cipher text (case-sensitive logic)
  decrypt(cipherText: string) {
    let plainArr = [];
    let plainLetter;

    cipherText.split("").map(cipher => {
      let code = cipher.charCodeAt(0);

      if (cipher === " ") {
        return plainArr.push(cipher); // Spaces remain unchanged
      }

      // Uppercase letters (A-Z)
      if (code >= 65 && code <= 90) {
        let diff = code - 65 - this.shift;
        if (diff >= 0) {
          plainLetter = String.fromCharCode((diff % 26 + 26) % 26 + 65);
        } else {
          plainLetter = String.fromCharCode(((26 + diff) % 26) + 65);
        }
      }
      // Lowercase letters (a-z)
      else if (code >= 97 && code <= 122) {
        let diff = code - 97 - this.shift;
        if (diff >= 0) {
          plainLetter = String.fromCharCode((diff % 26 + 26) % 26 + 97);
        } else {
          plainLetter = String.fromCharCode(((26 + diff) % 26) + 97);
        }
      }

      return plainArr.push(plainLetter);
    });
    return plainArr.join("");
  }
}
