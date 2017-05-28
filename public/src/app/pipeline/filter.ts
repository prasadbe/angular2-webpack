import { Pipe,PipeTransform } from '@angular/core';

@Pipe({
    name:'canView'
})

export class FilterView implements  PipeTransform {
    transform(value:any[]): any[] {

        return value.filter((k,v) => {
            console.log(k['canView']);
            return (k['canView']) ? true : false;
        });

    }
}


