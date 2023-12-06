import { Component } from '@angular/core';
import { DarkModeService } from '../../../shared/services/dark-mode.service';

@Component({
  selector: 'app-custom-container',
  templateUrl: './custom-container.component.html',
  styleUrls: ['./custom-container.component.css']
})
export class CustomContainerComponent {
  grados: number = 32;
  type: string = 'F';

  constructor(
    private darkModeService: DarkModeService
  ) {}

  get getDarkMode() {
    return this.darkModeService.dark;
  }

  changeMode() {
    this.darkModeService.changeMode();
  }

  changeTemp(value: string): string {
    return (value === 'c' || value === 'C') ? 'F' : 'C';
  }
}
