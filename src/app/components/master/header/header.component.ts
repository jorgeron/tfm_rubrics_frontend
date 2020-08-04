import { Component, OnInit } from '@angular/core';
import { TranslatableComponent } from '../../shared/translatable/translatable.component';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends TranslatableComponent implements OnInit {

  constructor(private translateService: TranslateService,
    private authService: AuthService,
    private router: Router) {
      super(translateService);
    }

  ngOnInit() {
  }

  changeLanguage(newLanguage: string) {
    super.changeLanguage(newLanguage);
  }

  currentLanguage(language: string) {
    const lang = localStorage.getItem('language');
    return (lang === language);
  }
}
