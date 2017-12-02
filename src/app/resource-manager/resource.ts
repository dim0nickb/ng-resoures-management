import { UsageService } from './usage.service';

export class Resource {
    id: number;
    name: string;
    description: string;

    constructor(id: number, name: string, description: string) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    getUsage(date: Date) {
        //const usage = this.usageService.getResourceUsage(this, date);
        //return usage;
        return Math.floor(Math.random() * 100) % 10 * 10;
    }
}
