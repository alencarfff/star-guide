import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: "root" })
export default class CachedPagination {
    protected _content: any[][] = new Array();

    constructor(protected http: HttpClient){}

    requestPage(page: number, url: string) : Observable<any> {
        return this.http.get<any>(`${url}?page=${page}`);
    }
    requestByUrl(url: string) : Observable<any> {
        return this.http.get<any>(`${url}`);
    }
    savePage(content: any[], page: number){
        this._content[page] = content;
    }
    getPage(page: number) : any[]{
        return this._content[page] || [];
    }
}