import { Component, OnInit } from '@angular/core';
import { TranslatableComponent } from '../../shared/translatable/translatable.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course/course.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent extends TranslatableComponent implements OnInit {

  constructor(translateService: TranslateService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CourseService) {
      super(translateService);
     }

  ngOnInit() {
    this.courseService.getCoursesByTeacher().then(courses => {
      console.log('courses: ', courses);
    });
  }

}
