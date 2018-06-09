import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversor'
})
export class ConversorPipe implements PipeTransform {

  transform(value, por) {
    let value_one = parseInt(value);
    let value_dos = parseInt(por);
    let result = 'la multiplicacion: ' + value_one + 'x' + value_dos + '=' + (value_one * value_dos);
    return result;
  }

}
