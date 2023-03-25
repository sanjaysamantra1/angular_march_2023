import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal',
})
export class OrdinalPipe implements PipeTransform {
  transform(input: any) {
    let output: string = '';
    switch (input % 10) {
      case 1:
        output = input + 'st';
        break;
      case 2:
        output = input + 'nd';
        break;
      case 3:
        output = input + 'rd';
        break;
      default:
        output = input + 'th';
    }
    return output;
  }
}
