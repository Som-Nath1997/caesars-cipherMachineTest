
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Shift } from './shift/shift.component';
import { PlainText } from './plainText/plainText.component';
import { CipherText } from './cipherText/cipherText.component';

@NgModule({
  declarations: [
    AppComponent,
    CipherText,
    PlainText,
    Shift
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
