import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Square, CurrentLocation, FinalLocation } from './models/model';
import { LaunchService } from './services/launch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public launch: LaunchService) {}
  title = 'iHoover';
  // Orientation default value
  public selected: string = 'North';
  // logic variables
  public square: Square = {
    xSquare: 0,
    ySquare: 0,
  };
  public currentLocation: CurrentLocation = {
    xCurrent: 0,
    yCurrent: 0,
    direction: '',
    orientation: '',
  };
  public finalLocation: FinalLocation = {
    xFinal: 0,
    yFinal: 0,
    orientation: '',
  };
  // loading handler variables
  isLoading: boolean = false;
  isOver: boolean = false;
  isUntouched: boolean = true;

  // User form
  squareForm = new FormGroup({
    xSquare: new FormControl(8, [Validators.required, Validators.min(2)]),
    ySquare: new FormControl(8, [Validators.required, Validators.min(2)]),
    xCurrent: new FormControl(7, [Validators.required]),
    yCurrent: new FormControl(7, [Validators.required]),
    orientation: new FormControl(''),
  });

  launcher() {
    if (this.squareForm.valid) {
      // get values from the form
      this.square.xSquare = Number(this.squareForm.value.xSquare);
      this.square.ySquare = Number(this.squareForm.value.ySquare);
      this.currentLocation.xCurrent = Number(this.squareForm.value.xCurrent);
      this.currentLocation.yCurrent = Number(this.squareForm.value.yCurrent);
      this.currentLocation.orientation = String(
        this.squareForm.value.orientation
      );
      // check initial direction to choose the right function

      this.isLoading = true;
      switch (this.squareForm.value.orientation) {
        case 'N': {
        }
        case 'E': {
        }
        case 'W': {
        }
        case 'S': {
        }
        default: {
          //use NORTh
        }
      }

      this.launch.launchHoover(
        this.square,
        this.currentLocation,
        this.finalLocation
      );

      this.isLoading = false;
      this.isOver = true;
    } else {
      console.log('Invalid form');
    }
  }

  ngOnInit(): void {
    this.isUntouched = true;
  }
}
