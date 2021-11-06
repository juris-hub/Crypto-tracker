import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeMinusSign'
})
export class RemoveMinusSignPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
