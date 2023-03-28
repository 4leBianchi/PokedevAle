import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'metric',
})
export class MetricPipe implements PipeTransform {
  transform(value: number | undefined, divider = 10): number | null {
    if (value == undefined) return null;

    console.log(value);
    console.log(divider);

    let result = value / divider;
    if (!isNaN(result)) {
      console.log(result.toFixed(1));
    }
    return result;
  }
}
