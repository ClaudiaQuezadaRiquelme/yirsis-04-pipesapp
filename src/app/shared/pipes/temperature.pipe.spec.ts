import { TemperatureValues } from '../enums/temperature.enum';
import { TemperaturePipe } from './temperature.pipe';

describe('TemperaturePipe', () => {
  it('create an instance', () => {
    const pipe = new TemperaturePipe();
    expect(pipe).toBeTruthy();
  });
  it('Debería retornar grados C si envío grados C', () => {
    const pipe = new TemperaturePipe();
    expect(pipe.transform(12,TemperatureValues.C)).toEqual('12.0 °C');
  });
  it('Debería retornar grados C si envío grados c', () => {
    const pipe = new TemperaturePipe();
    expect(pipe.transform(12,TemperatureValues.C)).toEqual('12.0 °C');
  });
  it('Debería retornar grados F si envío grados F', () => {
    const pipe = new TemperaturePipe();
    expect(pipe.transform(12,TemperatureValues.F)).toEqual('53.6 °F');
  });
});
