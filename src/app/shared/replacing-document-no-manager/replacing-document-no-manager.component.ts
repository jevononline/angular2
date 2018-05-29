
import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';


@Component({
  selector: 'app-replacing-document-no-manager',
  templateUrl: './replacing-document-no-manager.component.html',
  styleUrls: ['./replacing-document-no-manager.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ReplacingDocumentNoManagerComponent), multi: true }]
})
export class ReplacingDocumentNoManagerComponent implements OnInit, ControlValueAccessor {
  disabled = false;
  onChangeCallback = (z: any) => { };
  onTouchedCallback = () => { };

  myModel: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  customTrackBy(index: number) {
    return index;
  }

  writeValue(value: string[]) {
    if (Array.isArray(value) && value.length) {
      this.myModel = value;
    }
  }

  registerOnChange(fn) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn) {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  onChange() {
    this.onChangeCallback(this.myModel.filter(item => !!item));
  }

  add() {
    this.myModel.push(undefined);
    this.onChange();
  }

  remove(index) {
    this.myModel.splice(index, 1);
    this.onChange();
  }

}
