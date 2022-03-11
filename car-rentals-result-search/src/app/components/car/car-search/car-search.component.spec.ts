import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { CarSearchComponent } from './car-search.component';

describe('CarSearchComponent', () => {
  let component: CarSearchComponent;
  let fixture: ComponentFixture<CarSearchComponent>;
  let routerStub;
  const stateData = {
    pickUpDate: '1/20/2022',
    dropOffDate: '1/21/2022'
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CarSearchComponent]
    });
    routerStub = TestBed.get(Router);
    spyOn(routerStub, 'navigateByUrl').and.returnValue({
      extras: { url: 'report-details', state: stateData }
    });
    fixture = TestBed.createComponent(CarSearchComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call ngOnInit', () => {
    spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(component.ngOnInit()).toHaveBeenCalled();
  });
  it('should call search', () => {
    spyOn(component, 'search').and.callThrough();
    component.search();
    expect(component.search).toHaveBeenCalled();
  });
});
