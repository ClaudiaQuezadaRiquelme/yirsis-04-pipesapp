import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperaturePipe'
})
export class TemperaturePipe implements PipeTransform {

  transform(value: number, type: string): string {
    const final = ((type === 'F' || type === 'f') ? ((value * (9/5)) + 32) : (value)).toFixed(1);
    return `${final} °${type}`;
  }

}
