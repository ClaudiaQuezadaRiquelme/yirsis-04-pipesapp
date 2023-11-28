import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { TextComponent } from './text/text.component';
import { NumbersComponent } from './numbers/numbers.component';
import { DateComponent } from './date/date.component';
import { JsonComponent } from './json/json.component';
import { KeyValueComponent } from './key-value/key-value.component';
import { SliceComponent } from './slice/slice.component';



@NgModule({
  declarations: [
    ContainerComponent,
    TextComponent,
    NumbersComponent,
    DateComponent,
    JsonComponent,
    KeyValueComponent,
    SliceComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContainerComponent,
  ]
})
export class PipesCommonModule { }
