import { Component, OnInit } from '@angular/core';
import { TranslatableComponent } from '../translatable/translatable.component';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-denied-access-page',
  templateUrl: './denied-access-page.component.html',
  styleUrls: ['./denied-access-page.component.css']
})
export class DeniedAccessPageComponent extends TranslatableComponent implements OnInit {

  public url: string;

  constructor(translateService: TranslateService, authService: AuthService, router: Router,
    private route: ActivatedRoute) {
    super(translateService);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.url = location.origin + this.route.snapshot.queryParams['previousURL'];
  }

}
