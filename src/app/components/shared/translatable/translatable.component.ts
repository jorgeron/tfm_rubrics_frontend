import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-translatable',
  templateUrl: './translatable.component.html',
  styleUrls: ['./translatable.component.css']
})
export class TranslatableComponent implements OnInit {

  protected subscriptions: Subscription;

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    let lang = localStorage.getItem('language');
    if (lang === 'null') {
      lang = this.translate.getBrowserLang();
    }

    this.translate.setDefaultLang(lang);
    this.changeLanguage(lang);
  }

  changeLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem('language', language);
  }
}
