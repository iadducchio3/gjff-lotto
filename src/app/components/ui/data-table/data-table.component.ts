import { Component, Input } from "@angular/core";

@Component({
  selector: "app-data-table",
  templateUrl: "./data-table.component.html",
  styleUrls: ["./data-table.component.scss"],
})
export class DataTableComponent {
  @Input("data") dataSource = [];
  @Input("cols") tableCols: TableColumnModel[] = [];

  get keys() {
    return this.tableCols.map(({ key }) => key);
  }

  showBooleanValue(elt, column) {
    return column.config.values[`${elt[column.key]}`];
  }
}

export interface TableColumnModel {
  key: string;
  display: string;
  config?: ConfigOptionsModel;
}

export interface ConfigOptionsModel {
  isDate?: boolean;
  format: string;
  values?: any;
  isAction?: boolean;
  isBoolean: boolean;
  actions: ("delete" | "update")[];
}
