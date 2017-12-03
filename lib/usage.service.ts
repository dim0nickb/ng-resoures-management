import { Injectable } from '@angular/core';
import { Resource } from './resource';

@Injectable()
export class UsageService {

  constructor() { }

  getResourceUsage(resource: Resource, date: Date) {
    return Math.floor(Math.random() * 100);
  }
}
