import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBySearch',
  pure: false
})
export class FilterBySearchPipe implements PipeTransform {

  transform(data: any, search: string): any {
    if (!search) { return data; }

    return data.filter((el) => {
      return el.title.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  }

}
