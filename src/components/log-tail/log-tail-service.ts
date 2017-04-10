import {Http,Response} from '@angular/http';
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs/Observable';
@Injectable()
export class LogTailService{

    http:Http;

    constructor(http:Http){
        this.http = http;
    }

    getLogEntries(){
        return this.http.get('./log.json').map((res: Response) => res.json());
    }
}