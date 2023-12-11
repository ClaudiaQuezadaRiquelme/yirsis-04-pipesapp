import { Component } from '@angular/core';
import { DarkModeService } from '../../../shared/services/dark-mode.service';
import { TemperatureValues } from 'src/app/shared/enums/temperature.enum';

@Component({
  selector: 'app-custom-container',
  templateUrl: './custom-container.component.html',
  styleUrls: ['./custom-container.component.css'],
})
export class CustomContainerComponent {
  grados: number = 32;
  type: TemperatureValues = TemperatureValues.F;

  constructor(
    private darkModeService: DarkModeService
  ) {}

  get getDarkMode() {
    return this.darkModeService.dark;
  }

  changeMode() {
    this.darkModeService.changeMode();
  }

  changeTemp(value: TemperatureValues): TemperatureValues {
    return (value === TemperatureValues.C) ? TemperatureValues.F : TemperatureValues.C;
  }
}
