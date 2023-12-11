import { Pipe, PipeTransform } from '@angular/core';
import { TemperatureValues } from '../enums/temperature.enum';

@Pipe({
  name: 'temperaturePipe'
})
export class TemperaturePipe implements PipeTransform {
  transform(value: number, type: TemperatureValues): string {    
    const final = ((type === TemperatureValues.F) ? ((value * (9/5)) + 32) : (value)).toFixed(1);
    return `${final} °${type}`;
  }
}
