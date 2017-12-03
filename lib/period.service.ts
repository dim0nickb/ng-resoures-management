import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PeriodService {
    start: Date;
    end: Date;
    daysFromNow: number;
    days: Subject<Date[]>= new Subject<Date[]>();
    constructor() { }

    init(start: Date, daysFromNow: number) {
        this.daysFromNow = daysFromNow;
        this.start = start;
        this.end = new Date();
        this.end.setDate(this.start.getDate() + daysFromNow);
        this.days.next(this.getDays());
    }

    getPeriod(): void {
        this.days.next(this.getDays());
    }

    getDays(): Date[] {
        const daysCount = this.daysFromNow;
        let dates: Date[] = [];
        for (let i = 0; i < daysCount; i++) {
            let start = new Date(this.start);
            let date = new Date(start.setDate(this.start.getDate() + i));
            dates.push(date);
        }
        return dates;
    }

    getOffsetDate(offset: number): Date {
        let start = new Date(this.start);
        const date = new Date(start.setDate(this.start.getDate() + offset));
        return date;
    }
}
