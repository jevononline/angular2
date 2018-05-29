import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Standard } from '../standard';


@Component({
  selector: 'app-standard-replacing-manager',
  templateUrl: './standard-replacing-manager.component.html',
  styleUrls: ['./standard-replacing-manager.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => StandardReplacingManagerComponent), multi: true }]
})
export class StandardReplacingManagerComponent implements OnInit, ControlValueAccessor {
  disabled = false;
  onChangeCallback = (z: any) => { };
  onTouchedCallback = () => { };

  myModel: string[] = [];

  constructor() { 
  }

  customTrackBy(index: number) {
    return index;
  }

  ngOnInit() {
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
