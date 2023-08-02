export class Group {
    public columnKey!: string;
    public enableSummary?: boolean;
  }

  export class GroupPanelSettings {
    public enabled?: boolean;
    public text?: string;
    public deep?: number;
  }

  export class GroupRowData {
    public groupMark!: object;
    public key!: any[];
    public value!: any;
  }

  export class GroupedColumn {
    public key!: string;
    public title?: string;
    public columnsKeys!: string[];
  }