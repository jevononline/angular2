import { intersectionWith } from 'lodash';
import { OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

export class SuperSelectComponent implements OnInit, ControlValueAccessor {

  constructor() { }

  list: any[] = [];
  listCopy: any[] = [];

  disabled = false;
  onChangeCallback = (z: any) => { };
  onTouchedCallback = () => { };

  myModel: any;

  @Input()
  placeholder: string;

  @Input()
  floatPlaceholder: string;

  @Input()
  required: boolean;

  @Input()
  multiple = false;

  @Input()
  displayMultipleToolBar = false;

  @Output()
  change = new EventEmitter();

  @Output()
  close = new EventEmitter();

  @Output()
  open = new EventEmitter();

  @Input()
  isDisabledOption = (z: any) => false;

  ngOnInit() {
    this.get();
  }

  private __changed = false;
  onChange() {
    this.__changed = true;
    this.onChangeCallback(this.myModel);
    this.change.emit(this.myModel);
  }

  onOpen() {
    this.__changed = false;
    this.open.emit();
  }

  onClose() {
    this.onTouchedCallback();
    this.close.emit({ value: this.myModel, changed: this.__changed });
  }

  writeValue(value: any) {
    this.myModel = value;
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

  get() {

  }

  selectAll() {
    if (this.multiple) {
      this.myModel = this.list;
      this.onChange();
    }
  }

  clear() {
    if (this.multiple) {
      this.myModel = [];
    } else {
      this.myModel = undefined;
    }
    this.onChange();
  }

}


