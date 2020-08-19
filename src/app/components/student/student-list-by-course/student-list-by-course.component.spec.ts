import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListByCourseComponent } from './student-list-by-course.component';

describe('StudentListByCourseComponent', () => {
  let component: StudentListByCourseComponent;
  let fixture: ComponentFixture<StudentListByCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentListByCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentListByCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
