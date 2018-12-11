import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euroCurrency'
})
export class EuroCurrencyPipe implements PipeTransform {

  transform(value: number): string {
        let transf = value.toString().replace('.', ',');
        transf += ' €';
    return transf;
  }

}
