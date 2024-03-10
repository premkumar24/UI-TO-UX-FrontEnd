import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productCategory'
})
export class ProductCategoryPipe implements PipeTransform {

  transform(array: any[], category: String): any[] {
    if (!Array.isArray(array) || !category) {
      return array;
    }
    return  array.filter((items)=> items.category == category)
  }

}
