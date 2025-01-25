# Caesar`s Cipher

## Environment 

- Angular CLI Version: 10.0.4
- Angular Core Version: 10.0.4
- Node Version: v14 (LTS)
- Default Port: 8000

## Application Demo:

![](https://hrcdn.net/s3_pub/istreet-assets/iAefx9ivI3w_52gzmuDoBA/caesars-cipher.gif)

## Functionality Requirements

Complete a partially completed Angular application that encrypts and decrypts a piece of text using Caesar`s Cipher. The cipher uses an encryption algorithm where each letter is replaced with a letter by some fixed number of positions down the alphabetical series (e.g., a shift of 1 replaces the letter a with b, the letter e with f, the word hello with ifmmp, etc.).

Certain core Angular functionalities have already been implemented. Complete the Angular application in order to pass all the unit tests.

The application has the following functionalities:

- The app has three components:
  - The `Shift` component, which allows the user to enter the number of places to shift each character.
  - The `Plaintext` component, which allows the user to enter plain text.
  - The `Ciphertext` component, which allows the user to enter encrypted text.

- The Shift component has a dropdown which lets us select the shift value. The value of each option in the dropdown should be a number denoting the shift value. Initially the default option should have value as -1 and text as `Enter shift amount`.

- A string is encrypted when the user does the following:
  - Selects the number of units to shift from the dropdown.
  - Enters the text to encrypt into the `Plaintext` textbox.

- A string is decrypted when the user does the following:
  - Selects the number of units to shift from the dropdown.
  - Enters the text to decrypt into the `Ciphertext` textbox.

- The following list of actions should be supported by the app:
  - Enter the text to encrypt into the `Plaintext` textbox, which encrypts and renders correctly in the `Ciphertext` textbox
  - Delete text from either textbox
  - Enter the text to decrypt into the `Ciphertext` textbox, which decrypts and renders correctly in the `Plaintext` textbox

- The cipher is case-sensitive.
- During conversion, you may ignore numbers and special characters with the exception of spaces.
- Note: The functions for encrypting and decrypting the data are provided in app.component.ts. Please use these functions to encrypt/decrypt the text.

## Testing Requirements

The following data-test-id attributes are required in the component for the tests to pass:

- The select field to choose the shift should have the data-test-id attribute `select`.
- The Plaintext textbox should the data-test-id attribute `plain-text`.
- The Ciphertext textbox should have the data-test-id attribute `cipher-text`.

## Project Specifications

**Read-only Files**
- src/app/app.component.spec.ts

**Commands**
- run: 
```bash
npm start
```
- install: 
```bash
npm install
```
- test: 
```bash
npm test
```
