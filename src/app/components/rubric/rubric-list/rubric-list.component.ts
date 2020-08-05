import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { TranslatableComponent } from '../../shared/translatable/translatable.component';
import { TranslateService } from '@ngx-translate/core';
import { Rubric } from 'src/app/models/rubric.model';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { RubricService } from 'src/app/services/rubric/rubric.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-rubric-list',
  templateUrl: './rubric-list.component.html',
  styleUrls: ['./rubric-list.component.css']
})
export class RubricListComponent extends TranslatableComponent implements OnInit, OnDestroy {
  rubrics: Rubric[];
  dtTrigger: Subject<any> = new Subject();

  displayedColumns: string[] = ['id', 'name', 'description'];
  dataSource: MatTableDataSource<Rubric>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private translateService: TranslateService,
    private rubricService: RubricService) {
    super(translateService);
    // Create 100 users
    // const rubrics = Array.from({ length: 100 }, (_, k) => new Rubric().createNewRubric(k + 1));

    this.dataSource = new MatTableDataSource(this.rubrics);
    this.rubricService.getRubricsByTeacher().subscribe(
      res => {
        this.dataSource = new MatTableDataSource(res);
        this.dtTrigger.next();
      }
    );
    // Assign the data to the data source for the table to render
    //this.dataSource = new MatTableDataSource(rubrics);
  }

  ngOnInit() {
    super.ngOnInit();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
