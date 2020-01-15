import { Observable } from 'rxjs'
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import SearchInterface from '../interfaces/search.interface';
import { EntityEnum } from '../models/entity.enum';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: "root" })
export default class CachedPagination implements SearchInterface {
    private _content: any[][] = new Array();
    private readonly API: string = environment.url;

    constructor(protected http: HttpClient){}

    requestPage(page: number, search: string, url: string) : Observable<any> {
        var params = new HttpParams()
        params = params.append("page", page.toString());
        
        if( search ){
            params = params.append("search", search.toString());
        }

        return this.http.get<any>(url, { params });
    }
    requestById(id: number, entity: EntityEnum) : Observable<any>{
        return this.http.get<any>(`${this.API}/${entity}/${id}`);
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
    search(value: string, entity: EntityEnum) : Observable<any>{
        return this.http.get<any>(`${this.API}/${entity}/?search=${value}`);
    }
    getAllPages() : any[][] {
        return this._content;
    }
}