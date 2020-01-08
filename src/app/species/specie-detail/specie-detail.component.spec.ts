import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecieDetailComponent } from './specie-detail.component';

describe('SpecieDetailComponent', () => {
  let component: SpecieDetailComponent;
  let fixture: ComponentFixture<SpecieDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecieDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
