import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from 'src/app/services/student/student.service';
import { TranslatableComponent } from '../../shared/translatable/translatable.component';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-student-list-by-course',
  templateUrl: './student-list-by-course.component.html',
  styleUrls: ['./student-list-by-course.component.css']
})
export class StudentListByCourseComponent extends TranslatableComponent implements OnInit {

  displayedColumns: string[] = ['name', 'surname', 'email'];
  dataSource: MatTableDataSource<Student>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private translateService: TranslateService,
    private studentServie: StudentService,
    private route: ActivatedRoute) {
    super(translateService);
  }

  ngOnInit() {
    super.ngOnInit();
    this.dataSource = new MatTableDataSource();

    //const idCourse = this.route.params['idCourse'];
    //this.getStudents(idCourse);
    this.route.params.subscribe(params => {
      const idCourse = params['idCourse'];

      //if (idCourse) {
        this.getStudents(idCourse);
      //}
    });

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  getStudents(idCourse) {
    this.studentServie.getStudentsByCourse(idCourse).subscribe((students: Student[]) => {
      this.dataSource.data = students;
      return students;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
