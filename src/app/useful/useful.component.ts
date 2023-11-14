import {Component, HostListener, OnInit} from '@angular/core';
import {trigger, style, animate, transition, query, stagger, keyframes} from '@angular/animations';

@Component({
  selector: 'app-useful',
  templateUrl: './useful.component.html',
  styleUrls: ['./useful.component.scss'],
})
export class UsefulComponent  implements OnInit {
  public searchskills: string = '';
  public skills = [
    { name: "fonts google", link: "https://fonts.google.com/" },
    { name: "fontawesome", link: "https://fontawesome.com/" },
    { name: "convert fonts", link: "https://convertio.co/ru/font-converter/" },
    { name: "convert fonts", link: "http://www.freefontconverter.com/" },
    { name: "color converter", link: "https://colorscheme.ru/color-converter.html" },
    { name: "table colors", link: "http://www.stm.dp.ua/web-design/color-html.php" },
    { name: "materialpalette", link: "https://www.materialpalette.com/" },
    { name: "free stock photos", link: "https://pixabay.com/ru/" },
    { name: "online generators text", link: "https://online-generators.ru/text" },
    { name: "caniuse", link: "https://caniuse.com/" },
    { name: "validator-w3", link: "https://validator.w3.org/unicorn/" },
    { name: "normalize css", link: "http://necolas.github.io/normalize.css/" },
    { name: "reset css", link: "http://denweb.ru/verstka/sbros-stilej-css.html" },
    { name: "sass", link: "http://sass-lang.com/install" },
    { name: "lesscss", link: "http://lesscss.org/" },
    { name: "favicon link", link: "http://www.favicon.by/" },
    { name: "angular.io", link: "https://angular.io" },
    { name: "angular | ngx-bootstrap", link: "https://valor-software.com/ngx-bootstrap/#/getting-started" },
    { name: "angular | ngb-bootstrap", link: "https://ng-bootstrap.github.io/#/home" },
    { name: "jsonplaceholder", link: "http://jsonplaceholder.typicode.com" },
    { name: "nodejs", link: "https://nodejs.org/en/" },
    { name: "git download", link: "https://git-scm.com/" },
    { name: "git download linux", link: "https://git-scm.com/download/linux" },
    { name: "gulpjs", link: "https://gulpjs.com/" },
    { name: "bower.io", link: "https://bower.io/" },
    { name: "ng2-select", link: "https://valor-software.com/ng2-select/" },
    { name: "ngx-select-ex", link: "https://optimistex.github.io/ngx-select-ex/" },
    { name: "slimscroll", link: "https://www.npmjs.com/package/angular-io-slimscroll" },
    { name: "slimscroll", link: "https://rd-dev-ukraine.github.io/angular-io-slimscroll/" },
    { name: "ng2-charts", link: "https://www.npmjs.com/package/ng2-charts" },
    { name: "toastr", link: "https://www.npmjs.com/package/toastr" },
    { name: "html2pdf.js", link: "https://www.npmjs.com/package/html2pdf.js/v/0.9.1" },
    { name: "ngx-mydatepicker", link: "https://kekeh.github.io/ngx-mydatepicker/" },
    { name: "toastr", link: "https://www.npmjs.com/package/toastr" },
    { name: "ngxintltelinput", link: "https://www.npmjs.com/package/ngx-intl-tel-input" },
    { name: "kendo-angular-ui", link: "https://www.telerik.com/kendo-angular-ui" },
    { name: "material-pro", link: "https://wrappixel.com/demos/admin-templates/material-pro/landingpage/index.html" },
    { name: "dribbble", link: "https://dribbble.com/shots" },
  ];

  constructor() { }

  ngOnInit() {
  }
}

