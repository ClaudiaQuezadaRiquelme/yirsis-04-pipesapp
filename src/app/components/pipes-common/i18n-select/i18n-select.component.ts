import { Component } from '@angular/core';

@Component({
  selector: 'app-i18n-select',
  templateUrl: './i18n-select.component.html',
  styleUrls: ['./i18n-select.component.css']
})
export class I18nSelectComponent {
  genre = ['m', 'f', 'n', 'x'];
  mensajes = {
    'm': 'Bienvenido Usuario',
    'f': 'Bienvenida Usuaria',
    'n': 'Bienvenide Usuarie',
    'other': 'Bienvenix Usuarix',
  };
}
