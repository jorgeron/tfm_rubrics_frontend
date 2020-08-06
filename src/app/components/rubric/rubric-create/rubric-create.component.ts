import { Component, OnInit } from '@angular/core';
import { TranslatableComponent } from '../../shared/translatable/translatable.component';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Actor } from 'src/app/models/actor.model';
import { RubricService } from 'src/app/services/rubric/rubric.service';
import { AreaService } from 'src/app/services/area/area.service';
import { Area } from 'src/app/models/area.model';
import { CompetenceService } from 'src/app/services/competence/competence.service';
import { Competence } from 'src/app/models/competence.model';

@Component({
  selector: 'app-rubric-create',
  templateUrl: './rubric-create.component.html',
  styleUrls: ['./rubric-create.component.css']
})
export class RubricCreateComponent extends TranslatableComponent implements OnInit {

  competences_by_areas_map: Map<Area, Competence[]> = new Map<Area, Competence[]>();
  rubricForm: FormGroup;
  selected_competences: Competence[] = [];
  public currentActor: Actor;

  constructor(translateService: TranslateService,
    private rubricService: RubricService,
    private areaService: AreaService,
    private competenceService: CompetenceService,
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
      teacher: [this.currentActor._id],
      //competences: [[], Validators.required]
      //competences: new FormControl([])
      //competences: this.fb.array([])
    });

    this.areaService.getAllAreas().then((areas) => {
      areas.forEach(area => {
        this.competenceService.getCompetencesByAreaId(area._id).then((competencesByArea) => {
          this.competences_by_areas_map.set(area, competencesByArea);
        });
      });
      console.log('map: ', this.competences_by_areas_map);
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

  addCompetence(competence) {
    this.selected_competences.push(competence);
  }

  removeCompetence(competence) {
    const index = this.selected_competences.indexOf(competence);
    this.selected_competences.splice(index, 1);
  }

  getAreas() {
    return this.competences_by_areas_map.keys();
  }

  getAreaCompetences(area) {
    return this.competences_by_areas_map.get(area);
  }

  onSelection(e, v) {
    console.log(e.option._selected);
    if (e.option._selected) {
      this.selected_competences.push(e.option.value);
    } else {
      const comp = this.selected_competences.find(c => c._id === e.option.value._id);
      const index = this.selected_competences.indexOf(comp);
      this.selected_competences.splice(index, 1);
    }
  }
}
