import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Data } from './Data';
import { map } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, AfterViewInit {

  tableData: Data[];
  isLoaded: boolean;
  dataSource: MatTableDataSource<Data>;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getData();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getData() {
    this.httpClient.get('https://program4green2.firebaseio.com/DBP4G.json')
      .pipe(map( responseData => {
        const dataArray = [];
        for (const key in responseData) {
          dataArray.push({...responseData[key]})
        }
        return dataArray;
      })).subscribe(t => {
        this.tableData = t;
        this.dataSource = new MatTableDataSource(this.tableData);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort
      })
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  displayedColumns: string[] = ['nom_com',
  'code_iris',
  'rank_of_score_global_region_1',
  'nom_iris',
  'population',
  'score_global',
  'acces_aux_interfaces_numeriques',
  'acces_a_linformation',
  'competences_administatives',
  'competences_numeriques_scolaires',
  'global_acces',
  'global_competences',];

}
