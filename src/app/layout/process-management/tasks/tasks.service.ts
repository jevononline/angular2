

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Task } from './task';

@Injectable()
export class TasksService {

  constructor(private http: HttpClient) { }

  /**
   * 
   * @param type 0 待办任务 1 已办任务
   * @param tableQuery 
   */
  get(type: number, tableQuery: TableQuery) {
    let params = new HttpParams();
    if (tableQuery) {
      Object.keys(tableQuery).forEach(key => {
        let value = tableQuery[key];
        if (value != undefined) {
          params = params.append(key, value.toString());
        }
      });
    }
    return this.http.get<{ results: Task[], total: number }>(type === 0 ? '/api/tasks' : '/api/activities', { params });
  }

  getOneById(processInstanceId, taskId) {
    return this.http.get<Task>(`/api/processes/${processInstanceId}/tasks/${taskId}`);
  }

  saveTask(entity: Task) {
    return this.http.post(`/api/processes/${entity.processInstanceId}/tasks/${entity.processDefinitionId}/${entity.taskDefinitionKey}`, {
      taskId: entity.id,
      executionId: entity.executionId,
      data: entity.data
    });
  }

  getResoucre<T>(resourceId: number) {
    return this.http.get<{ data: T }>(`/api/task-resources/${resourceId}`);
  }

  getResoures<T>(entity: Task, resourceType: IdNameValuePair) {
    let params = new HttpParams();
    params = params.append('type', resourceType.value.toString());

    switch (entity.taskDefinitionKey) {
      case 'edit':
      case 'departmentReview':
        params = params.append('executionId', entity.executionId);
        break;
      case 'managementCommitteeReview':
      case 'technicalCommitteeReview':
      case 'workingCommitteeReview':
        params = params.append('processDefinitionId', entity.processDefinitionId);
        params = params.append('taskDefinitionKey', entity.taskDefinitionKey);
        break;
      default:
        break;
    }
    // params = params.append('taskId', entity.id);

    return this.http.get<T[]>(`/api/processes/${entity.processInstanceId}/resources`, { params });
  }
}
