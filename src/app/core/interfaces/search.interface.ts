import { EntityEnum } from '../models/entity.enum';
import { Observable } from 'rxjs';

export default interface SearchInterface {
    search(value: string, entity: EntityEnum) : Observable<any>
}