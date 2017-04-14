
import {Component, Injectable} from '@angular/core';

import * as map from 'lodash.map/index';

@Component({
  selector: 'basic',
  templateUrl: './basic.ng.html',
})
@Injectable()
export class Basic {
  ctxProp: string;
  numbers: any[] = [];

  constructor() { 
    this.ctxProp = 'Hello world!';
    this.numbers = map([1,2,3], (n: number) => {
      return n * 10;
    });
  }
}
