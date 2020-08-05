import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslatableComponent } from '../../shared/translatable/translatable.component';
import { TranslateService } from '@ngx-translate/core';
import { Rubric } from 'src/app/models/rubric.model';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-rubric-list',
  templateUrl: './rubric-list.component.html',
  styleUrls: ['./rubric-list.component.css']
})
export class RubricListComponent extends TranslatableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description'];
  dataSource: MatTableDataSource<Rubric>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private translateService: TranslateService) {
    super(translateService);
    // Create 100 users
    const rubrics = Array.from({ length: 100 }, (_, k) => new Rubric().createNewRubric(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(rubrics);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
