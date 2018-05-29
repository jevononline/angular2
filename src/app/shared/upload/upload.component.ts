import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => UploadComponent), multi: true }]
})
export class UploadComponent implements OnInit, ControlValueAccessor {

  @Input()
  multiple: boolean = false;

  disabled: boolean = false;

  myModel: any;

  @Output()
  view = new EventEmitter();

  uploader = new FileUploader({ url: '/api/upload' });

  onChangeCallback = (z) => { };
  onTouchedCallback = () => { };

  constructor(private http: HttpClient) { }

  ngOnInit() {
    if (this.multiple) {
      this.myModel = [];
    } else {
      this.myModel = null;
    }
    this.uploader.onAfterAddingFile = (item) => {
      let fd = new FormData();
      fd.append('file', item._file, item.file.name);
      this.http.post(item.url, fd).subscribe((data: any) => {
        if (this.multiple) {
          this.myModel.push(data);
        } else {
          this.myModel = data;
        }
        this.onChangeCallback(this.myModel);
      });
    };
  }

  writeValue(value) {
    if (value) {
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

  remove(index) {
    this.myModel.splice(index, 1);
    this.onChangeCallback(this.myModel);
  }

  onView() {
    this.view.emit();
  }

}
