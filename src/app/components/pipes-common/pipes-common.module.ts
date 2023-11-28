import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { TextComponent } from './text/text.component';
import { NumbersComponent } from './numbers/numbers.component';
import { DateComponent } from './date/date.component';
import { JsonComponent } from './json/json.component';
import { KeyValueComponent } from './key-value/key-value.component';
import { SliceComponent } from './slice/slice.component';
import { I18nSelectComponent } from './i18n-select/i18n-select.component';
import { I18nPluralComponent } from './i18n-plural/i18n-plural.component';



@NgModule({
  declarations: [
    ContainerComponent,
    TextComponent,
    NumbersComponent,
    DateComponent,
    JsonComponent,
    KeyValueComponent,
    SliceComponent,
    I18nSelectComponent,
    I18nPluralComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContainerComponent,
  ]
})
export class PipesCommonModule { }
