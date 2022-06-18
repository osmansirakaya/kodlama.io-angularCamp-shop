import { Pipe, PipeTransform} from '@angular/core';
import { filter } from 'rxjs';
import { Product } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], filterText?: string): Product[] { // datayı değiştirdiğimiz kısım
    filterText=filterText?filterText.toLocaleLowerCase():null // aranacak kelimeyi küçük harfe çevir. //? -> filterText var mı. varsa küçük harfe çevir. yoksa null çevir.
    return filterText?value.filter((p:Product)=>p.name.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }
}
