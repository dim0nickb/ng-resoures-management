import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SearcResourceService {
  query: Subject<string> = new Subject<string>();
  constructor() { }

}
