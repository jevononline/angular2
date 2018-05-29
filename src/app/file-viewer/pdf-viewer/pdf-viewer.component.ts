import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';

import { PDFJS } from 'pdfjs-dist';
import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import { FileViewerService } from '../file-viewer.service';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss']
})
export class PdfViewerComponent implements OnInit {

  @Input()
  ticket: string;

  @ViewChild('viewportContainer')
  container: ElementRef;

  @ViewChild('toolbarContainer')
  toolbarContainer: ElementRef;

  @ViewChild('pageInput')
  pageInput: ElementRef;

  state = 0;
  numPages: number;
  currentPage = 1;

  constructor(private fileViewerService: FileViewerService) {
    PDFJS.disableWorker = true;
  }

  ngOnInit() {
    this.state = 1;
    this.fileViewerService.getFileBase64(this.ticket)

      .subscribe(data => {

        PDFJS.getDocument({ data: atob(data) }).then((pdf) => {
          this.state = 2;
          this.numPages = pdf.numPages;
          let pagePromises = [];
          let container = this.container.nativeElement;
          for (let i = 1; i <= this.numPages; i++) {
            let div = document.createElement('div');
            div.setAttribute('id', 'page-' + i);
            div.className = 'page';
            container.appendChild(div);
            pagePromises.push(new Promise((resolve) => {
              pdf.getPage(i).then((page) => {

                let scale = 1;
                let viewport = page.getViewport(scale);
                let div = document.getElementById(`page-` + (page.pageIndex + 1));

                div.setAttribute('style', `position: relative;width:${viewport.width}px;margin:10px auto;box-shadow:0 0 6px 0 #333;`);

                let canvas = document.createElement('canvas');
                canvas.setAttribute('style', 'vertical-align:middle;');
                div.appendChild(canvas);

                let context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                let renderContext = {
                  canvasContext: context,
                  viewport: viewport
                };

                page.render(renderContext).then(() => {
                  resolve();
                });
              });
            })
            );
          }
          return Promise.all(pagePromises);
        }).then(() => {
          this.state = 0;
          Observable
            .fromEvent(this.container.nativeElement, 'scroll')

            .subscribe(() => {

              for (let i = 1; i <= this.numPages; i++) {
                let y = this.container.nativeElement.scrollTop - document.getElementById(`page-${i}`).offsetTop;
                if (y < this.container.nativeElement.clientHeight / 2) {
                  this.currentPage = i;
                  break;
                }
              }
            });
        });
      });
  }



  prevPage() {
    --this.currentPage;
    this.gotoPage();
  }

  nextPage() {
    ++this.currentPage;
    this.gotoPage();
  }

  jumpToPage(value) {
    let pageIndex = +value;
    if (pageIndex >= 1 && pageIndex <= this.numPages) {
      this.currentPage = pageIndex;
      this.gotoPage();
    } else {
      this.pageInput.nativeElement.value = this.currentPage;
    }
  }

  gotoPage() {
    this.container.nativeElement.scrollTop = document.getElementById(`page-${this.currentPage}`).offsetTop;
  }

}
