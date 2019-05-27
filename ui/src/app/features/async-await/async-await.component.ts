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
    this.service.getFirstDrunkmanAsPromise();
    this.service.getSecondDrunkmanAsPromise();
    this.service.getThirdDrunkmanAsPromise();
    this.service.getFourthDrunkmanAsPromise();

    this.go();
  }

  go() {
    if (!this.drunkmanOne || !this.drunkmanTwo || !this.drunkmanThree || !this.drunkmanFour) {
      this.snackBar.open('ON NE PART PAS SANS LES POTES...SALE LACHE !!', '', { duration: 5000});
      console.error('ON NE PART PAS SANS LES POTES...SALE LACHE !!');
    } else {
      this.service.goFirstDrunkmanAsPromise();
      this.service.goSecondDrunkmanAsPromise();
      this.service.goThirdDrunkmanAsPromise();
      this.service.goFourthDrunkmanAsPromise();
    }
  }
}
