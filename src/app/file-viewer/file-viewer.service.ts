import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FileViewerService {

  constructor(private http: HttpClient) { }

  getFileBase64(ticket: string) {
    return this.http.get(`/api/file-viewer/${ticket}/base64`, {
      responseType: 'text'
    });
  }

}
