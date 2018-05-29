import * as moment from 'moment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { StandardRevision } from './standard-revision';

@Injectable()
export class StandardRevisionsService {

  constructor(private http: HttpClient) { }

  extract(entity: StandardRevision) {
    let standardSystem = { id: entity.standardSystem.id, name: entity.standardSystem.name };
    let department = { id: entity.department.id, name: entity.department.name };
    let drafter = { id: entity.drafter.id, staff: { id: entity.drafter.staff.id, fullName: entity.drafter.staff.fullName } };
    return {
      resourceId: entity.resourceId,
      revisionType: entity.revisionType,
      finishTime: moment(entity.finishTime).format('YYYY-MM-DD'),
      preparationNote: entity.preparationNote,

      riskPoint: entity.riskPoint,    //风险点
      assistingDepartments: (entity.assistingDepartments || []).map(item => ({ id: item.id })), //协管部门
      solicitedDepartments: (entity.solicitedDepartments || []).map(item => ({ id: item.id })), //征求意见部门
      referenceStandardIds: entity.referenceStandardIds,    //引用规范文件

      standardSystem: standardSystem,
      department: department,
      drafter: drafter,

      mainFile: entity.mainFile,
      reportFiles: entity.reportFiles,
      flowChartFiles: entity.flowChartFiles,

      executeDate: entity.executeDate ? moment(entity.executeDate).format('YYYY-MM-DD') : undefined,
      publishDate: entity.executeDate ? moment(entity.publishDate).format('YYYY-MM-DD') : undefined,

      standard: {
        id: entity.standard.id,
        standardNo: entity.standard.standardNo,
        name: entity.standard.name,
        // standardSystem: standardSystem,
        // department: department,
        // drafter: drafter
      }
    };
  }

  checkAvailability(processInstanceId: string, standardNos: string[]) {
    return this.http.post<number[]>(`/api/processes/${processInstanceId}/standard-revisions/availability`, { standardNos });
  }

}
