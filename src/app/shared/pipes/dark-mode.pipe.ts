import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'darkModePipe'
})
export class DarkModePipe implements PipeTransform {
    transform(value: boolean, ...args: any[]) {
        if(value) {
            return 'bg-dark text-white';
        } else {
            return 'bg-light text-dark';
        }
    }
}