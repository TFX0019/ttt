import { Component, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  loading: boolean;
  public activeLang = 'en';
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.activeLang);
   }

  ngAfterViewInit(): void {
    this.loading = true;
    // var revapi;

    // $(document).ready(() => {

    //   revapi = $('.tp-banner').revolution({
    //     delay: 9000,
    //     startwidth: 1170,
    //     startheight: 500,
    //     hideThumbs: 10,
    //     fullWidth: 'on',
    //     forceFullWidth: 'on'
    //   });

    // }); //ready
  }
  public cambiarLenguaje(lang) {
    this.activeLang = lang;
    this.translate.use(lang);
  }
  initRTevolution() {

  }

}
