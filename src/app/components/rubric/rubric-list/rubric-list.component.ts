import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslatableComponent } from '../../shared/translatable/translatable.component';
import { TranslateService } from '@ngx-translate/core';
import { Rubric } from 'src/app/models/rubric.model';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { RubricService } from 'src/app/services/rubric/rubric.service';

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

  constructor(private translateService: TranslateService,
    private rubricService: RubricService) {
    super(translateService);
  }

  ngOnInit() {
    super.ngOnInit();
    this.dataSource = new MatTableDataSource();

    this.getRubrics();

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  getRubrics() {
    this.rubricService.getRubricsByTeacher().subscribe((rubrics: Rubric[]) => {
      this.dataSource.data = rubrics;
      return rubrics;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
