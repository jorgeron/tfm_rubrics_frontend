import { Component, OnInit } from '@angular/core';
import { TranslatableComponent } from '../../shared/translatable/translatable.component';
import { TranslateService } from '@ngx-translate/core';
import { RubricService } from 'src/app/services/rubric/rubric.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Rubric } from 'src/app/models/rubric.model';
import { MatTableDataSource } from '@angular/material';
import { Competence } from 'src/app/models/competence.model';

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

  displayedColumns: string[] = ['name', '1', '2', '3', '4', '5', '6', '7', '8'];
  dataSource: MatTableDataSource<Competence>;

  constructor(translateService: TranslateService,
    private rubricService: RubricService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder) {
      super(translateService);
      this.levelsArray = Array.from(Array(this.NUMBER_OF_LEVELS), (_, i) => i + 1);
    }

  ngOnInit() {
    super.ngOnInit();

    this.idRubric = this.route.snapshot.params['idRubric'];
    this.rubricService.getRubricById(this.idRubric).then((result) => {
      this.rubric = result;
      this.competences = result.competences;
      this.dataSource = new MatTableDataSource();
      this.dataSource.data = this.competences;
    });
    

    
    //this.getRubric();
  }

  /*getRubric() {
    this.rubricService.getRubricById(this.idRubric).subscribe((rubric: Rubric) => {
      console.log('rubric: ', rubric);
      this.rubric = rubric;
      this.dataSource.data = rubric.competences;
      return rubric;
    });
  }*/
}
