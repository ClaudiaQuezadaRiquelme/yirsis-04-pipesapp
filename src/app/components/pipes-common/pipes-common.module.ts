import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { TextComponent } from './text/text.component';
import { NumbersComponent } from './numbers/numbers.component';
import { DateComponent } from './date/date.component';



@NgModule({
  declarations: [
    ContainerComponent,
    TextComponent,
    NumbersComponent,
    DateComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContainerComponent,
  ]
})
export class PipesCommonModule { }
