import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lbs',
})
export class LbsPipe implements PipeTransform {
  transform(
    value: number | undefined,
    divider = 10,
    multiplier_lbs = 2.2046
  ): string | null {
    if (value == undefined) return null;

    console.log(value);
    console.log(divider);
    console.log(multiplier_lbs);

    let result_kg = value / divider;

    let result_lbs = result_kg * multiplier_lbs;
    if (!isNaN(result_lbs)) {
      console.log(result_lbs.toFixed(1));
    }
    return result_lbs.toFixed(1);
  }
}
