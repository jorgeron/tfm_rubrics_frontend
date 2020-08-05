import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RubricListComponent } from './rubric-list.component';

describe('RubricListComponent', () => {
  let component: RubricListComponent;
  let fixture: ComponentFixture<RubricListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubricListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubricListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
