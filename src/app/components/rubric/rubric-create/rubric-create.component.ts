import { Component, OnInit } from '@angular/core';
import { TranslatableComponent } from '../../shared/translatable/translatable.component';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/models/actor.model';
import { RubricService } from 'src/app/services/rubric/rubric.service';

@Component({
  selector: 'app-rubric-create',
  templateUrl: './rubric-create.component.html',
  styleUrls: ['./rubric-create.component.css']
})
export class RubricCreateComponent extends TranslatableComponent implements OnInit {

  rubricForm: FormGroup;
  public currentActor: Actor;

  constructor(translateService: TranslateService,
    private rubricService: RubricService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder) {
    super(translateService);
  }

  ngOnInit() {
    super.ngOnInit();
    this.currentActor = this.authService.getCurrentActor();
    this.createRubricForm();
  }


  createRubricForm() {
    this.rubricForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      teacher: [this.currentActor._id]
    });
  }

  onSubmit() {
    const formModel = this.rubricForm.value;

    this.rubricService.createRubric(formModel).then((val) => {
      console.log('Rubric creada: ', val);
      this.router.navigate(['/teacher/rubrics/list']);
    }).catch((err) => {
      console.log('Error creando rubric: ', err);
    });

  }
}
