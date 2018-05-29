/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare class TableQuery {
  page?: number;
  limit?: number;
  sort?: string;
  orderBy?: string;
  keyword?: string;

  [key: string]: any;
}

declare class TableResult<T>{
  total: number;
  results: T[];
}

declare class FileTicket {
  filename: string;
  folder?: string;
  ticket: string;
}

declare class IdNameValuePair {
  id?: string;
  name: string;
  value?: number;
}
