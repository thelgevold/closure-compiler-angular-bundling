import {Subject } from 'rxjs/Subject';
import {Coordinates} from './coordinates';
import {Observable} from 'rxjs/Observable';

export class EdgeService extends Subject<Coordinates>{

    getCoordinates(){
        return this.asObservable().bufferCount(2).map(buffer => {return {first:buffer[0], second:buffer[1]}});
    }
        
}