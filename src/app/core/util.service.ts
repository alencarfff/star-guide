import { Injectable } from '@angular/core';

Injectable({ providedIn: 'root' })
export class UtilService {
    
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
}