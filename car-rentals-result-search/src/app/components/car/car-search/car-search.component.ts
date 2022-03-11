import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DriverAgeList } from '../const/car.const';

@Component({
  selector: 'app-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.scss']
})
export class CarSearchComponent implements OnInit {
  driverAges = DriverAgeList;
  carSearchForm: FormGroup;
  todayDt = new Date();
  constructor(public router: Router) { 
    this.buildForm();
  }

  ngOnInit() {
  }

  buildForm(): void {
    this.carSearchForm = new FormGroup({
      pickUpLocation: new FormControl('', Validators.required),
      pickUpTime: new FormControl('', Validators.required),
      dropOffTime: new FormControl('', Validators.required),
      ageOfDriver: new FormControl('', Validators.required),
      pickUpDate: new FormControl('', Validators.required),
      dropOffDate: new FormControl('', Validators.required),
    });
  }

  search(): void {
    this.router.navigateByUrl('report-details', {state : this.carSearchForm.value});        
  }

}
