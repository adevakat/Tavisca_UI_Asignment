import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarDetailsService } from 'src/app/service/car-details.service';
import { CarDetailsList } from '../const/car.const';

@Component({
  selector: 'app-result-details',
  templateUrl: './result-details.component.html',
  styleUrls: ['./result-details.component.scss'],
})
export class ResultDetailsComponent implements OnInit {
  // carDetails = CarDetailsList;
  carDetails : any;
  sortOption: any;
  stateData: any;
  diffDays: number;

  constructor(private router: Router, private carDetailsServie: CarDetailsService) { 
    const state = this.router.getCurrentNavigation().extras;
    this.stateData = state.state;
  }

  ngOnInit() {
    const date1 = this.stateData.pickUpDate;
    const date2 = this.stateData.dropOffDate;
    const diffTime = Math.abs(date2 - date1);
    this.diffDays = Math.ceil(diffTime/(1000 * 60 * 60 * 24));
    this.diffDays = this.diffDays === 0 ? 1 : this.diffDays;
    this.carDetailsServie.getCarData().subscribe(res => {
      this.carDetails = res;
    });
  }

  sortChange() {
    if (this.sortOption == 1) {
      this.carDetails.sort((a, b) => a.pricePerDay - b.pricePerDay);
    }
    if (this.sortOption == 2) {
      this.carDetails.sort((a, b) => b.pricePerDay - a.pricePerDay);
    }
    if (this.sortOption == 3) {
      this.carDetails.sort((a, b) => (a.type > b.type) ? 1 : ((b.type > a.type) ? -1 : 0));
    }
    if (this.sortOption == 4) {
      this.carDetails.sort((a, b) => (a.type > b.type) ? -1 : ((b.type > a.type) ? 1 : 0));
    }
    if (this.sortOption == 5) {
      this.carDetails.sort((a, b) => (a.subType > b.subType) ? 1 : ((b.subType > a.subType) ? -1 : 0));
    }
    if (this.sortOption == 6) {
      this.carDetails.sort((a, b) => (a.subType > b.subType) ? -1 : ((b.subType > a.subType) ? 1 : 0));
    }
  }
}
