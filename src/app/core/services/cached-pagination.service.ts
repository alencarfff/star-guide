import { Observable } from 'rxjs'
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import SearchInterface from '../interfaces/search.interface';
import { EntityEnum } from '../models/entity.enum';
import { environment } from '../../../environments/environment';
import Page from '../models/page.model';

@Injectable({ providedIn: "root" })
export default class CachedPagination implements SearchInterface {
    private readonly API: string = environment.url;
    private _content: Page[] = new Array();
    private http: HttpClient;

    constructor(inject: Injector){
        this.http = inject.get(HttpClient);
    }

    requestPage(page: number, search: string, url: string) : Observable<Page> {
        var params = new HttpParams()
        params = params.append("page", page.toString());
        
        if( search ){
            params = params.append("search", search.toString());
        }

        return this.http.get<Page>(url, { params });
    }
    requestById(id: number, entity: EntityEnum) : Observable<any>{
        return this.http.get<any>(`${this.API}/${entity}/${id}/`);
    }
    requestByUrl(url: string) : Observable<any> {
        return this.http.get<any>(`${url}`);
    }
    savePage(content: Page, page: number){
        this._content[page] = content;
    }
    getPage(page: number) : Page {
        return this._content[page] || null;
    }
    search(value: string, entity: EntityEnum) : Observable<Page>{
        return this.http.get<any>(`${this.API}/${entity}/?search=${value}`);
    }
    getAllPages() : Page[] {
        return this._content;
    }
}