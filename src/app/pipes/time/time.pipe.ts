import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'time'
})
export class TimePipe implements PipeTransform {

    transform(value: number, ...args: any[]): any {
        return moment.unix(value).format('DD MMMM YYYY HH:mm');
    }

}
