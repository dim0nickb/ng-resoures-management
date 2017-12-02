import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'russify'})
export class RussifyPipe implements PipeTransform {
    en_syms = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'];
    ru_syms = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

  transform(value: string): string {
    let val = (value + '').toLowerCase()    ;
    for (let i = 0; i < 7; i++) {
       val = val.replace(this.en_syms[i], this.ru_syms[i]);
    }
    return val;
  }
}
