import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UtilService {
  private readonly assetsPath: string = "/src/assets/img/";
    
  toRoman(num) {
    var roman = { x: 10, ix: 9, v: 5, iv: 4, i: 1 };
    var str = '';
  
    for (var i of Object.keys(roman)) {
      var q = Math.floor(num / roman[i]);
      num -= q * roman[i];
      str += i.repeat(q);
    }
  
    return str;
  }

  getEntityImage(url: string, entityName: string){
    console.log(entityName)
    return `${this.assetsPath}/${entityName}/${this.getEntityId(url)}`;
  }

  getEntityId(url: string) : number {
    let parts = url.split('/');

    return +parts[parts.length - 2];
  }
}