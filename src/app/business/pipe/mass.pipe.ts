import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mass',
})
export class WeightPipe implements PipeTransform {
  transform(value: number | undefined, divider = 10): number | null {
    if (value == undefined) return null;

    let result = value / divider;

    return result;
  }
}
