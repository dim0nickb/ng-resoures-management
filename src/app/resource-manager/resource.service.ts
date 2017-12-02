import { Injectable } from '@angular/core';
import { Resource } from './resource';
import { MOCK_RESOURCES } from './mock-resources';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ResourceService {

  constructor() { }

  getResources(): Observable<Resource[]> {
    return of(MOCK_RESOURCES);
  }
}
