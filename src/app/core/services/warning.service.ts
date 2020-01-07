import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export default class WarningService {
    private _showWarning: boolean = true;
    public readonly timeInMs: number = 4500;

    get showWarning(){
        return this.showWarning;
    }
    set showWarning(show: boolean){
        this.showWarning = show;
    }
}