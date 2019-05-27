import { Component, OnInit } from '@angular/core';
import { DrunkmanService } from 'src/app/core/http/drunkman.service';
import { Drunkman } from 'src/app/shared/models/drunkman';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.scss']
})
export class AsyncAwaitComponent implements OnInit {
  drunkmanOne: Drunkman;
  drunkmanTwo: Drunkman;
  drunkmanThree: Drunkman;
  drunkmanFour: Drunkman;

  constructor(private service: DrunkmanService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  getAllDrunkmansWithAsyncAwait() {
    this.service.getFirstDrunkmanAsPromise()
      .then(res => {
        this.drunkmanOne = res;
      });
    this.service.getSecondDrunkmanAsPromise()
      .then(res => {
        this.drunkmanTwo = res;
      });
    this.service.getThirdDrunkmanAsPromise()
      .then(res => {
        this.drunkmanThree = res;
      });
    this.service.getFourthDrunkmanAsPromise()
      .then(res => {
        this.drunkmanFour = res;
      });

    this.go();
  }

  go() {
    if (!this.drunkmanOne || !this.drunkmanTwo || !this.drunkmanThree || !this.drunkmanFour) {
      this.snackBar.open('ON NE PART PAS SANS LES POTES...SALE LACHE !!', '', { duration: 5000});
      console.error('ON NE PART PAS SANS LES POTES...SALE LACHE !!');
    } else {
      this.service.goFirstDrunkmanAsPromise()
        .then(res => {
          this.drunkmanOne = res;
        });
      this.service.goSecondDrunkmanAsPromise()
        .then(res => {
          this.drunkmanTwo = res;
        });
      this.service.goThirdDrunkmanAsPromise()
        .then(res => {
          this.drunkmanThree = res;
        });
      this.service.goFourthDrunkmanAsPromise()
        .then(res => {
          this.drunkmanFour = res;
        });
    }
  }
}
