import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform{
  transform (skills: any[],value: string | null) {
    if(value == null) return skills;
    return skills.filter(function(search){
      return search.name.toLowerCase().indexOf(value.toLowerCase()) > -1;
    })

  }
}
