import { Component } from '@angular/core';

@Component({
  selector: 'app-i18n-plural',
  templateUrl: './i18n-plural.component.html',
  styleUrls: ['./i18n-plural.component.css']
})
export class I18nPluralComponent {
  notificaciones: number = 0;
  msje = {
    '=0': 'No tienes ninguna notificación.',
    '=1': 'Tienes una notificación',
    'other': 'Tienes muchas notificaciones (#).'
  }

  addNotificacion() {
    this.notificaciones++;
  }
}
