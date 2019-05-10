import {Component, ViewChild} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {renderComponent} from '@angular/core/src/render3';
import {GifComponent} from '../gif/gif.component';
import {forEach} from '@angular/router/src/utils/collection';
import {MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  preview: string;
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {preview: '/assets/test.webm', position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {preview: 'assets/test.webm', position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {preview: 'assets/test.webm', position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {preview: 'assets/test.webm', position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {preview: 'assets/test.webm', position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {preview: 'assets/test.webm', position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {preview: 'assets/test.webm', position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {preview: 'assets/test.webm', position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {preview: 'assets/test.webm', position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {preview: 'assets/test.webm', position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  selectedRow: HTMLTableRowElement;

  displayedColumns: string[] = ['preview', 'position', 'name', 'weight', 'symbol'];
  dataSource =  ELEMENT_DATA;
}
