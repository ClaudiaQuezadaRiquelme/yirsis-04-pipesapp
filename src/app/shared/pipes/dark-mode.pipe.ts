import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'darkModePipe'
})
export class DarkModePipe implements PipeTransform {
    transform(value: boolean, ...args: any[]): string {
        return (value) ? 'bg-dark text-white' : 'bg-light text-dark';
    }
}