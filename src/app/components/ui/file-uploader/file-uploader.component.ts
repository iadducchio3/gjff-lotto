import { Component, EventEmitter, Output } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent {
  @Output() onFileUploaded = new EventEmitter<any>();
  public fileName: string;

  public convertToJson(event: any): void {
    //extract name
    this.fileName = event.target.files[0]?.name;
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>event.target;
    if (target.files.length !== 1) {
      throw new Error('Cannot use multiple files');
    }
    const reader: FileReader = new FileReader();
    reader.readAsBinaryString(target.files[0]);
    reader.onload = (e: any) => {
      /* create workbook */
      const binarystr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(binarystr, { type: 'binary' });

      /* selected the first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      this.onFileUploaded.emit(XLSX.utils.sheet_to_json(ws));
    };
  }
}
