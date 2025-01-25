import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {CipherText} from './cipherText/cipherText.component';
import {PlainText} from './plainText/plainText.component';
import {FormsModule} from "@angular/forms";
import {RouterTestingModule} from '@angular/router/testing';
import { Shift } from './shift/shift.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled;
  let select;
  let plainTextArea;
  let cipherTextArea;

  const TEST_IDS = {
    selectId: 'select',
    plainTextId: 'plain-text',
    cipherTextId: 'cipher-text'
  }

  const getByTestId = (id, parentNode?) => {
    if (!parentNode) {
      parentNode = compiled;
    }
    return parentNode.querySelector(`[data-test-id="${id}"]`);
  };

  const pushValueToInput = async (input, value) => {
    input.value = value;
    input.dispatchEvent(new Event('change'));
    input.dispatchEvent(new Event('input'));
    await fixture.whenStable();
    await fixture.detectChanges();
  };

  const pushDropdownValue = async (el, value) => {
    el.value = value;
    el.dispatchEvent(new Event('change'));
    await fixture.whenStable();
    await fixture.detectChanges();
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        CipherText,
        PlainText,
        Shift
      ],
      providers: [],
      schemas : [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(async() => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.autoDetectChanges(true);
    compiled = fixture.debugElement.nativeElement;
    component = fixture.componentInstance;
    await fixture.detectChanges();
    await fixture.whenStable();

    select = getByTestId(TEST_IDS.selectId)
    plainTextArea = getByTestId(TEST_IDS.plainTextId)
    cipherTextArea = getByTestId(TEST_IDS.cipherTextId)
  });

  it('check default/initial state of the select dropdown', () => {
    expect(plainTextArea.value).toBeFalsy();
    expect(cipherTextArea.value).toBeFalsy();
    expect(select.selectedOptions[0].value).toEqual('-1');
    expect(select.selectedOptions[0].textContent.trim()).toEqual('Enter shift amount');
  });

  it('check if plaintext to ciphertext conversion works', async() => {
    await pushDropdownValue(select, 5);
    await pushValueToInput(plainTextArea, 'hackerrank');

    cipherTextArea = getByTestId(TEST_IDS.cipherTextId);
    expect(cipherTextArea.value.trim()).toEqual("mfhpjwwfsp");
  });

  it('check if ciphertext to plaintext conversion works', async() => {
    await pushDropdownValue(select, 7);
    await pushValueToInput(cipherTextArea, 'hackerrank');

    plainTextArea = getByTestId(TEST_IDS.plainTextId);
    expect(plainTextArea.value.trim()).toEqual("atvdxkktgd");
  });

  it('check if you can write in plain and cipher fields without page refresh', async() => {
    await pushDropdownValue(select, 3);
    await pushValueToInput(plainTextArea, 'hackerrank');

    cipherTextArea = getByTestId(TEST_IDS.cipherTextId);
    expect(cipherTextArea.value.trim()).toEqual("kdfnhuudqn");

    await pushValueToInput(plainTextArea, '');

    cipherTextArea = getByTestId(TEST_IDS.cipherTextId);
    expect(cipherTextArea.value.trim()).toBeFalsy();

    await pushValueToInput(plainTextArea, 'Hello World');

    cipherTextArea = getByTestId(TEST_IDS.cipherTextId);
    expect(cipherTextArea.value.trim()).toEqual("Khoor Zruog");
  });

  it('check if you can write in plain and cipher fields if field not empty', async() => {
    await pushDropdownValue(select, 3);
    await pushValueToInput(plainTextArea, 'Cipher');

    cipherTextArea = getByTestId(TEST_IDS.cipherTextId);
    expect(cipherTextArea.value.trim()).toEqual("Flskhu");

    await pushValueToInput(cipherTextArea, 'Hello World');

    plainTextArea = getByTestId(TEST_IDS.plainTextId);
    expect(plainTextArea.value.trim()).toEqual("Ebiil Tloia");

    await pushValueToInput(cipherTextArea, 'Hackerrank');

    plainTextArea = getByTestId(TEST_IDS.plainTextId);
    expect(plainTextArea.value.trim()).toEqual("Exzhbooxkh");
  });
});
