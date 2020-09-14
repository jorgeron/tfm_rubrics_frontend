import { Component, OnInit } from '@angular/core';
import { TranslatableComponent } from '../../shared/translatable/translatable.component';
import { TranslateService } from '@ngx-translate/core';
import { RubricService } from 'src/app/services/rubric/rubric.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Rubric } from 'src/app/models/rubric.model';
import { MatTableDataSource } from '@angular/material';
import { Competence } from 'src/app/models/competence.model';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course/course.service';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student/student.service';
import { ActivityService } from 'src/app/services/activity/activity.service';
import { Activity } from 'src/app/models/activity.model';
import { Assessment } from 'src/app/models/assessment.model';
import { Score } from 'src/app/models/score.model';
import { AssessmentService } from 'src/app/services/assessment/assessment.service';

@Component({
  selector: 'app-assessment-create',
  templateUrl: './assessment-create.component.html',
  styleUrls: ['./assessment-create.component.css']
})
export class AssessmentCreateComponent extends TranslatableComponent implements OnInit {

  private idRubric: string;
  private rubric: Rubric;
  private competences: Competence[];
  public NUMBER_OF_LEVELS = 8;
  private levelsArray = [];
  private courses: Course[];
  private students: Student[];
  private activities: Activity[];
  private selected_activity;
  private selected_student;
  private selected_course;
  private assessment: Assessment;
  private scores: Score[] = [];
  private comment;

  displayedColumns: string[] = ['name', '1', '2', '3', '4', '5', '6', '7', '8'];
  dataSource: MatTableDataSource<Competence>;

  constructor(translateService: TranslateService,
    private rubricService: RubricService,
    private courseService: CourseService,
    private studentService: StudentService,
    private activityService: ActivityService,
    private assessmentService: AssessmentService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder) {
      super(translateService);
      this.levelsArray = Array.from(Array(this.NUMBER_OF_LEVELS), (_, i) => i + 1);
    }

  ngOnInit() {
    super.ngOnInit();

    this.assessment = new Assessment();
    this.idRubric = this.route.snapshot.params['idRubric'];
    this.rubricService.getRubricById(this.idRubric).then((result) => {
      this.rubric = result;
      this.assessment.rubric = this.rubric._id;
      this.competences = result.competences;
      this.dataSource = new MatTableDataSource();
      this.dataSource.data = this.competences;
    });

    this.courseService.getCoursesByTeacher().then((courses) => {
      this.courses = courses;
    });
  }

  onCourseChange(event) {
    this.getStudents(this.selected_course);
    this.getActivities(this.selected_course);
  }

  onActivityChange() {
    /*var activity = new Activity();
    activity._id = this.selected_activity._id;
    activity.title = this.selected_activity.title;*/
    console.log('selected activity: ', this.selected_activity)
    this.assessment.activity = this.selected_activity;
  }

  onStudentChange() {
    this.assessment.student = this.selected_student;
  }

  getStudents(idCourse) {
    this.studentService.getStudentsByCourse(idCourse).subscribe((students: Student[]) => {
      this.students = students;
      console.log('students; ', this.students);
      return students;
    });
  }

  getActivities(idCourse) {
    this.activityService.getActivitiesByCourse(idCourse).subscribe((activities: Activity[]) => {
      this.activities = activities;
      console.log('activities; ', this.activities);
      return activities;
    });
  }

  onSelectLevel(competence: Competence, levelDescriptor) {
    console.log('comment: ', this.comment);
    competence.proficiencyLevels.map((level) =>
      level.selected = level._id === levelDescriptor._id);
  }

  onSubmit() {
    this.buildAssessment().then(_ => {
      this.assessmentService.createAssessment(this.assessment).then(result => {
        this.router.navigate(['/teacher/rubrics/list']);
      });
    });
  }

  buildAssessment() {
    this.scores = [];
    return new Promise<any>((resolve, reject) => {
      this.competences.forEach((competence) => {
        const score = new Score();
        score.competence = competence._id;
        score.competenceName = competence.name;
        score.proficiencyLevel = competence.proficiencyLevels.find(x => x.selected);
        this.scores.push(score);
      });
      if (this.comment) {
        this.assessment.comment = this.comment;
      }
      this.assessment.scores = this.scores;
      resolve();
    });
  }
}
