import {Component, ViewChild} from '@angular/core';
import {MatTable} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  gender: string;
  department: string;
  salary: number;
  startdate:number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'shubham', gender: 'M', department: 'account', salary: 20000,startdate:1-2-2021},
  {name: 'akash', gender: 'M', department: 'IT', salary: 23000,startdate:2-2-2021},
  {name: 'naveen', gender: 'M', department: 'Hr', salary:20000,startdate:2-3-2021},
  {name: 'satish', gender: 'M', department: 'IT', salary: 19000,startdate:2-3-2021},
  {name:'vinayak', gender: 'M', department: 'sales', salary: 24000,startdate:3-2-2021},
];

/**
 * @title Adding and removing data when using an array-based datasource.
 */
@Component({
  selector: 'dashboard',
  styleUrls: ['dashboard.component.css'],
  templateUrl: 'dashboard.component.html',
})
export class TableDynamicArrayDataExample {
  displayedColumns: string[] = ['name', 'gender', 'department', 'salary','startdate'];
  dataSource = [...ELEMENT_DATA];
  constructor() { }

  ngOnInit(): void {
  }
  // @ViewChild(MatTable) table: MatTable<PeriodicElement>;

  // addData() {
  //   const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
  //   this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
  //   this.table.renderRows();
  // }
}
