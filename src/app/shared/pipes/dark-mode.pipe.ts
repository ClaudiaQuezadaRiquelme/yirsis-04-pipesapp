import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'darkModePipe'
})
export class DarkModePipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        
        return 'DarkMode desde Pipe'
    }
}