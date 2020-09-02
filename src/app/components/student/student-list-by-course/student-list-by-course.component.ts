import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from 'src/app/services/student/student.service';
import { TranslatableComponent } from '../../shared/translatable/translatable.component';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { CompetenceService } from 'src/app/services/competence/competence.service';

@Component({
  selector: 'app-student-list-by-course',
  templateUrl: './student-list-by-course.component.html',
  styleUrls: ['./student-list-by-course.component.css']
})
export class StudentListByCourseComponent extends TranslatableComponent implements OnInit {

  displayedColumns: string[] = ['name', 'surname'];
  dataSource: MatTableDataSource<Student>;
  private competences = [];

  @ViewChild(MatSort) sort: MatSort;

  constructor(private translateService: TranslateService,
    private studentService: StudentService,
    private competenceService: CompetenceService,
    private route: ActivatedRoute) {
    super(translateService);
  }

  ngOnInit() {
    super.ngOnInit();
    this.dataSource = new MatTableDataSource();

    this.competenceService.getAllCompetences().then(competences => {
      this.competences = competences;
      for (const c of competences) {
        this.displayedColumns.push(c._id);
      }
      console.log("columns: ", this.displayedColumns);
      this.route.params.subscribe(params => {
        const idCourse = params['idCourse'];
        this.getStudents(idCourse);
      });
    });

    this.dataSource.sort = this.sort;
  }


  getStudents(idCourse) {
    this.studentService.getStudentsByCourse(idCourse).subscribe((students: Student[]) => {
      this.dataSource.data = students;
      return students;
    });
  }

  getStudentLevelInCompetence(student, competenceId) {
    let result = null;
    student.overallLevels.forEach(element => {
      if (element.competenceId === competenceId) {
        result = element.level;
      }
    });
    return result;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
