import { Directive, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { debounceTime } from 'rxjs/operator/debounceTime';
import { debug } from 'util';
@Directive({
  selector: '[appDownload]'
})
export class DownloadDirective {

  @Input()
  appDownload: { name?: string, files: FileTicket[] };

  @Output()
  downloading = new EventEmitter();

  @Output()
  complete = new EventEmitter();

  isDownloading = false;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  @HostListener('click')
  download() {
    if (!this.isDownloading) {
      let { name, files } = this.appDownload;
      if (files.length === 1) {
        name = null;
      }
      // files = files.filter(item => item.filename && item.ticket);

      this.isDownloading = true;
      this.downloading.emit();
      this.http.post('/api/download', { name, files }).subscribe((data: any) => {
        this.isDownloading = false;
        this.complete.emit();
        location.href = `/api/download/${data.token}`;
      }, (errorResponse: HttpErrorResponse) => {
        this.isDownloading = false;
        let { status } = errorResponse;
        if (status >= 500) {
          this.snackBar.open('下载失败，请稍后重试！', null, { duration: 3000, extraClasses: ['warn'] });
        }
      });
    }
  }
}
