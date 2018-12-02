import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taisan'
})
export class TaisanPipe implements PipeTransform {

    transform(items: any, filter: any, defaultFilter: boolean): any {
        let returnItems = items;
        if (!filter) {
            return items;
        }

        if (!Array.isArray(items)) {
            return items;
        }
        for (const key in filter) {
            if (filter[key].normalize('NFD').replace(/[\u0300-\u036f]/g, '') !== '') {
                returnItems = returnItems.filter(value => {
                    return value[key].normalize('NFD').replace(/[\u0300-\u036f]/g, '').indexOf(filter[key].normalize('NFD').replace(/[\u0300-\u036f]/g, '')) > -1;
                });
            }
        }
        return returnItems;
    }
}
