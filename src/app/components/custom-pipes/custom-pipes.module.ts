import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomContainerComponent } from './custom-container/custom-container.component';
import { TemperaturePipe } from 'src/app/shared/pipes/temperature.pipe';


@NgModule({
  declarations: [
    TemperaturePipe,
    CustomContainerComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CustomContainerComponent,
  ]
})
export class CustomPipesModule { }
