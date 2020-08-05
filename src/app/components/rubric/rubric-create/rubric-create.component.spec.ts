import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RubricCreateComponent } from './rubric-create.component';

describe('RubricCreateComponent', () => {
  let component: RubricCreateComponent;
  let fixture: ComponentFixture<RubricCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubricCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubricCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
