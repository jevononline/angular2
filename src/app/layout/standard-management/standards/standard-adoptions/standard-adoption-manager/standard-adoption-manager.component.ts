import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { StandardAdoption } from '../standard-adoption';


@Component({
  selector: 'app-standard-adoption-manager',
  templateUrl: './standard-adoption-manager.component.html',
  styleUrls: ['./standard-adoption-manager.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => StandardAdoptionManagerComponent), multi: true }]
})
export class StandardAdoptionManagerComponent implements OnInit, ControlValueAccessor {

  @Input()
  floatPlaceholder: string;

  @Input()
  placeholderStandardNo: string;

  @Input()
  placeholderAdoptionLevel: string;

  disabled = false;
  onChangeCallback = (z: any) => { };
  onTouchedCallback = () => { };

  myModel: StandardAdoption[] = [];

  constructor() { }

  ngOnInit() {
  }

  writeValue(value: StandardAdoption[]) {
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
    this.onChangeCallback(this.myModel);
  }

  add() {
    this.myModel.push(new StandardAdoption());
    this.onChangeCallback(this.myModel);
  }

  remove(index) {
    this.myModel.splice(index, 1);
    this.onChangeCallback(this.myModel);
  }

}
