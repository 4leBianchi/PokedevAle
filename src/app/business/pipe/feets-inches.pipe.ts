import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'feetsInches',
})
export class FeetsInchesPipe implements PipeTransform {
  transform(
    value: number | undefined,
    divider = 10,
    multiplier_inche = 39.37,
    divider_feet = 12
  ): string | null {
    if (value == undefined) return null;

    let result_metric = value / divider;

    let result_inche = result_metric * multiplier_inche;

    let result_feet = result_inche / divider_feet;

    result_feet = Math.trunc(result_feet);

    result_inche = result_inche % divider_feet;

    return result_feet + "'" + result_inche.toFixed(0) + '" ';
  }
}
