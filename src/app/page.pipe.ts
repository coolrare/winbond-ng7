import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'page'
})
export class PagePipe implements PipeTransform {

  transform(value: number, space: boolean = true): any {
    return '第' + (space ? ' ' : '') + value + (space ? ' ' : '') + '頁';
  }

}
