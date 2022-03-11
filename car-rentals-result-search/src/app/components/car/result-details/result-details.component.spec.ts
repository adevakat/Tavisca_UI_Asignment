import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { CarDetailsService } from 'src/app/service/car-details.service';
import { CarDetailsList } from '../const/car.const';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ResultDetailsComponent } from './result-details.component';

fdescribe('ResultDetailsComponent', () => {
  let component: ResultDetailsComponent;
  let fixture: ComponentFixture<ResultDetailsComponent>;
  let routerStub;
  const stateData = {
    pickUpDate: '1/20/2022',
    dropOffDate: '1/21/2022'
  }
  const carDetailsServicestub = () => ({
    getCarData: () => ({})
  });
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ResultDetailsComponent],
      imports: [RouterTestingModule, HttpClientModule, BrowserAnimationsModule, Ng2SearchPipeModule],
      providers: [
        { provide: CarDetailsService, useFactory: carDetailsServicestub }
      ]
    });
    routerStub = TestBed.get(Router);
    spyOn(routerStub, 'getCurrentNavigation').and.returnValue({
      extras: { state: stateData }
    });
    fixture = TestBed.createComponent(ResultDetailsComponent);
    component = fixture.componentInstance;
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnint', fakeAsync(() => {
    component.stateData = stateData;
    const mockCarData = CarDetailsList;
    spyOn(component, 'ngOnInit').and.callThrough();
    const carDetailsServicestub: CarDetailsService = fixture.debugElement.injector.get(CarDetailsService);
    spyOn(carDetailsServicestub, 'getCarData').and.callFake(() => {
      return of(mockCarData).pipe();
    });
    component.ngOnInit();
    carDetailsServicestub.getCarData();
    expect(component.ngOnInit).toHaveBeenCalled();
    expect(carDetailsServicestub.getCarData).toHaveBeenCalled();
  }));

  it('should call sortChange if sortOption = 1', () => {
    spyOn(component, 'sortChange').and.callThrough();
    component.sortOption = 1;
    component.carDetails = CarDetailsList;
    component.sortChange();
    expect(component.sortChange).toHaveBeenCalled();
  });

  it('should call sortChange if sortOption = 2', () => {
    spyOn(component, 'sortChange').and.callThrough();
    component.sortOption = 2;
    component.carDetails = CarDetailsList;
    component.sortChange();
    expect(component.sortChange).toHaveBeenCalled();
  });

  it('should call sortChange if sortOption = 3', () => {
    spyOn(component, 'sortChange').and.callThrough();
    component.sortOption = 3;
    component.carDetails = CarDetailsList;
    component.sortChange();
    expect(component.sortChange).toHaveBeenCalled();
  });

  it('should call sortChange if sortOption = 4', () => {
    spyOn(component, 'sortChange').and.callThrough();
    component.sortOption = 4;
    component.carDetails = CarDetailsList;
    component.sortChange();
    expect(component.sortChange).toHaveBeenCalled();
  });

  it('should call sortChange if sortOption = 5', () => {
    spyOn(component, 'sortChange').and.callThrough();
    component.sortOption = 5;
    component.carDetails = CarDetailsList;
    component.sortChange();
    expect(component.sortChange).toHaveBeenCalled();
  });

  it('should call sortChange if sortOption = 6', () => {
    spyOn(component, 'sortChange').and.callThrough();
    component.sortOption = 6;
    component.carDetails = CarDetailsList;
    component.sortChange();
    expect(component.sortChange).toHaveBeenCalled();
  });

});
