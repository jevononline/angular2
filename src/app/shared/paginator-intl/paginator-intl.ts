
import { MatPaginatorIntl } from '@angular/material';

const rangeLabel = (page: number, pageSize: number, length: number) => {
  if (length == 0 || pageSize == 0) { return `0 共 ${length}`; }

  length = Math.max(length, 0);

  const startIndex = page * pageSize;

  // If the start index exceeds the list length, do not try and fix the end index to the end.
  const endIndex = startIndex < length ?
    Math.min(startIndex + pageSize, length) :
    startIndex + pageSize;

  return `${startIndex + 1} - ${endIndex} 共 ${length}`;
}


export function getPaginatorIntl() {

  let paginatorIntl = new MatPaginatorIntl();

  paginatorIntl.itemsPerPageLabel = '每页显示:';
  paginatorIntl.nextPageLabel = '下一页';
  paginatorIntl.previousPageLabel = '上一页';
  paginatorIntl.getRangeLabel = rangeLabel;

  return paginatorIntl;
}