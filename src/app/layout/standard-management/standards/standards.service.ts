import * as moment from 'moment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { StandardSystem } from '../../system-management/standard-system/standard-system';
import { Standard } from './standard';

@Injectable()
export class StandardsService {

  constructor(private http: HttpClient) { }

  private setDownloadFolderName(item: Standard) {
    let files = [];
    // 设置下载时文件所属目录
    if (item.mainFile) {
      item.mainFile.folder = '标准正文';
      files.push(item.mainFile);
    }
    if (item.flowChartFiles) {
      item.flowChartFiles.forEach(z => {
        z.folder = '流程图';
        files.push(z);
      });
    }
    if (item.reportFiles) {
      item.reportFiles.forEach(z => {
        z.folder = '报告与记录';
        files.push(z);
      });
    }
    item.files = files;
  }

  get(standardSystemId, view, tableQuery?: TableQuery) {
    let params = new HttpParams();
    if (tableQuery) {
      Object.keys(tableQuery).forEach(key => {
        let value = tableQuery[key];
        if (value != undefined) {
          params = params.append(key, value.toString());
        }
      });
    }

    return this.http.get<{ results: Standard[], total: number }>(`/api/standards/standard-system/${standardSystemId}/${view}`, { params })
      .map(data => {
        data.results.forEach(this.setDownloadFolderName);
        return data;
      });
  }

  getGroupedByStandardSystems(standardSystemIds: number[]) {
    return this.http.get<StandardSystem[]>(`/api/standard-system/grouped-by/${standardSystemIds.toString()}/standards`);
  }

  getManyByIds(ids: number[]) {
    return this.http.get<Standard[]>(`/api/standards/many/${ids.toString()}`).map(data => {
      data.forEach(this.setDownloadFolderName);
      return data;
    });
  }

  getOneById(id: number) {
    return this.http.get<Standard>(`/api/standards/${id}`).map(data => {
      data.publishDate = moment(data.publishDate).toDate();
      data.executeDate = moment(data.executeDate).toDate();
      return data;
    });
  }



  create(entity: Standard) {
    return this.http.post('/api/standards', {
      standardCode: entity.standardCode,
      standardNo: entity.standardNo,
      name: entity.name,
      categoryValue: entity.categoryValue,
      standardSystem: { id: entity.standardSystem.id },
      department: { id: entity.department.id },
      drafter: { id: entity.drafter && entity.drafter.id },

      publishDate: moment(entity.publishDate).format('YYYY-MM-DD'),
      executeDate: moment(entity.executeDate).format('YYYY-MM-DD'),

      adoptions: entity.adoptions,
      replacingStandards: entity.replacingStandards,
      mainFile: entity.mainFile,
      flowChartFiles: entity.flowChartFiles,
      reportFiles: entity.reportFiles,

      remark: entity.remark
    });
  }

  import(file: FileTicket) {
    return this.http.post('/api/standards/import', file);
  }

  update(entity: Standard) {
    return this.http.put(`/api/standards/${entity.id}`, {
      standardCode: entity.standardCode,
      standardNo: entity.standardNo,
      name: entity.name,
      categoryValue: entity.categoryValue,
      standardSystem: { id: entity.standardSystem.id },
      department: { id: entity.department.id },
      drafter: { id: entity.drafter && entity.drafter.id },

      publishDate: moment(entity.publishDate).format('YYYY-MM-DD'),
      executeDate: moment(entity.executeDate).format('YYYY-MM-DD'),

      adoptions: entity.adoptions,
      replacingStandards: entity.replacingStandards,
      mainFile: entity.mainFile,
      flowChartFiles: entity.flowChartFiles,
      reportFiles: entity.reportFiles,

      remark: entity.remark
    });
  }

  delete(id: number) {
    return this.http.delete(`/api/standards/${id}`);
  }
}
