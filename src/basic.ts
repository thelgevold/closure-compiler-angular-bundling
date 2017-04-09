
import {Component} from '@angular/core';

import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'basic',
  templateUrl: './basic.ng.html',
})
export class Basic {
  ctxProp: string;
  subject = new Subject();
  constructor() { }

  ngOnInit() {

    this.subject.asObservable().subscribe((res:string) => this.ctxProp = res);

    this.subject.next('initial value');
  }

  emitNewValue() {
    this.subject.next(new Date().getTime());
  }
}
