import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'mytitlecase'
})
export class TitleCasePipe implements PipeTransform {

    transform(value: string) {
        return value.toUpperCase();
    }

}