import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining',
})
export class RemainingPipe implements PipeTransform {
  transform(msg: string = '', maxLen: any = 100) {
    return maxLen - msg.length;
  }
}
