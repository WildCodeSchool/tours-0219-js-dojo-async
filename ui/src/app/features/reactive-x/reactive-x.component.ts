import { DrunkmanService } from 'src/app/core/http/drunkman.service';
import { Component, OnInit } from '@angular/core';
import { Drunkman } from 'src/app/shared/models/drunkman';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-reactive-x',
  templateUrl: './reactive-x.component.html',
  styleUrls: ['./reactive-x.component.scss']
})
export class ReactiveXComponent implements OnInit {
  drunkmanOne: Drunkman;
  drunkmanTwo: Drunkman;
  drunkmanThree: Drunkman;
  drunkmanFour: Drunkman;

  constructor(private service: DrunkmanService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  getAllDrunkmansWithAsyncAwait() {
    this.service.getFirstDrunkmanAsObservable();
    this.service.getSecondDrunkmanAsObservable();
    this.service.getThirdDrunkmanAsObservable();
    this.service.getFourthDrunkmanAsObservable();

    this.go();
  }

  go() {
    if (!this.drunkmanOne || !this.drunkmanTwo || !this.drunkmanThree || !this.drunkmanFour) {
      this.snackBar.open('ON NE PART PAS SANS LES POTES...SALE LACHE !!', '', { duration: 5000});
      console.error('ON NE PART PAS SANS LES POTES...SALE LACHE !!');
    } else {
      this.service.goFirstDrunkmanAsObservable();
      this.service.goSecondDrunkmanAsObservable();
      this.service.goThirdDrunkmanAsObservable();
      this.service.goFourthDrunkmanAsObservable();
    }
  }

}
