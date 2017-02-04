
import {Component, Injectable} from '@angular/core/index';

@Component({
  selector: 'basic',
  templateUrl: './basic.ng.html',
})
@Injectable()
export class Basic {
  ctxProp: string;
  numbers = [1,2,3,4];
  constructor() { this.ctxProp = 'initial value'; }
}
