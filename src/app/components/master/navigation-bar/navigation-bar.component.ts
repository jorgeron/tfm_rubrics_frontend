import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslatableComponent } from '../../shared/translatable/translatable.component';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent extends TranslatableComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>();

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
