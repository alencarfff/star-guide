import CachedPagination from '../services/cached-pagination.service';

export default class CacheTools extends CachedPagination {
    private _contentItem: any;

    public get getPreloadedItem() : any {
        return this._contentItem;
    }
    public set setPreloadedItem(item: any){
        this._contentItem = item;
    }
}