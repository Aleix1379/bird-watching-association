import {Injectable} from '@angular/core';
import {Observation} from '../../interfaces/Observation';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    /**
     * value = storage[key]
     */
    private static getItem<T>(key: string): T {
        const item = localStorage.getItem(key);
        if (item) {
            return JSON.parse(item);
        }
        return null;
    }

    /**
     * Returns the name of the nth key in the list, or null if n is greater
     * than or equal to the number of key/value pairs in the object.
     */
    private static key(index: number): string | null {
        return localStorage.key(index);
    }

    /**
     * delete storage[key]
     */
    private static removeItem(key: string): void {
        localStorage.removeItem(key);
    }

    /**
     * storage[key] = value
     */
    private static setItem<T>(key: string, value: T): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    constructor() {
    }

    public setObservations(observations: Observation[]) {
        LocalStorageService.setItem<Observation[]>('observations', observations);
    }

    public getObservations(): Observation[] {
        return LocalStorageService.getItem<Observation[]>('observations');
    }

}
