import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'metric'
})
export class MetricPipe implements PipeTransform {

  transform(value:number | undefined, divider = 0.1): number|null {
    if(value==undefined) return null;
    else return Math.imul(value, divider);
  }

}
