import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Rubric } from 'src/app/models/rubric.model';
import { RubricService } from 'src/app/services/rubric/rubric.service';
import { TranslatableComponent } from '../../shared/translatable/translatable.component';

@Component({
  selector: 'app-rubric-view',
  templateUrl: './rubric-view.component.html',
  styleUrls: ['./rubric-view.component.css']
})
export class RubricViewComponent extends TranslatableComponent implements OnInit {
  rubric = new Rubric();
  idRubric: string = null;

  constructor(translateService: TranslateService,
    private rubricService: RubricService,
    private route: ActivatedRoute,
    private router: Router) {
      super(translateService);
     }

  ngOnInit() {
    super.ngOnInit();
    this.idRubric = this.route.snapshot.params['idRubric'];
    this.rubricService.getRubricById(this.idRubric)
      .then((rubric) => {
        this.rubric = rubric;
      }).catch((err) => {
        console.log(err);
      });

  }

}
