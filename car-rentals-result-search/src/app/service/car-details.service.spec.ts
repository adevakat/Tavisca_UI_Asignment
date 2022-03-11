import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CarDetailsList } from '../components/car/const/car.const';

import { CarDetailsService } from './car-details.service';

describe('CarDetailsService', () => {
  let service: CarDetailsService;
  let httpTestingCtrl: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
    service = TestBed.get(CarDetailsService);
    httpTestingCtrl = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getcatData', (done) => {
    const outputData = CarDetailsList;
    service.getCarData().subscribe((result) => {
      expect(result).toBeDefined();
      done();
    });
    const req = httpTestingCtrl.expectOne('http://localhost:4000/carData');
    expect(req.request.method).toEqual('GET');
    req.flush(outputData);
  });

});
