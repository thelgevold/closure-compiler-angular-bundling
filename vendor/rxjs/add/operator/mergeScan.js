import { Observable } from '../../Observable';
import { mergeScan } from '../../operator/mergeScan';
Observable.prototype.mergeScan = mergeScan;
