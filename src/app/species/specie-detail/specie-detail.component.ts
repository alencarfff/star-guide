import { Component, OnInit, Injector } from '@angular/core';
import { EntityDetailComponent } from 'src/app/shared/components/entity-detail/entity-detail.component';
import { SpecieService } from 'src/app/core/services/specie.service';
import { EntityEnum } from 'src/app/core/models/entity.enum';
import EntityInfo from 'src/app/core/models/entity-info.model';
import { Subscription } from 'rxjs';
import SpecieModel from 'src/app/core/models/specie.model';

@Component({
  selector: 'sw-specie-detail',
  templateUrl: './specie-detail.component.html',
  styleUrls: [
    './specie-detail.component.scss',
  ]
})
export class SpecieDetailComponent extends EntityDetailComponent implements OnInit {
  private specie: SpecieModel = null;
  private specieId: number = 0;

  constructor(injector: Injector, private specieService: SpecieService) { 
    super(injector);
  }

  ngOnInit() {
    this.loadFromCacheOrRequestEntity(this.specieService, EntityEnum.SPECIE, this.fill.bind(this));
  }

  fill(info: EntityInfo, subscription: Subscription){
    if( subscription ){
      subscription.unsubscribe();
    }

    this.specie = info.entity;
    this.specieId = info.id;
  }
}
