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
    xFinal: 5,
    yFinal: 5,
    orientation: '',
  };
  // loading handler variables
  isLoading: boolean = false;
  isOver: boolean = false;
  isUntouched: boolean = true;

  // User form
  squareForm = new FormGroup({
    xSquare: new FormControl(0, [Validators.required, Validators.min(2)]),
    ySquare: new FormControl(0, [Validators.required, Validators.min(2)]),
    xCurrent: new FormControl(0, [
      Validators.required,
      (control: AbstractControl) =>
        Validators.max(this.square.xSquare)(control),
    ]),
    yCurrent: new FormControl(0, [
      Validators.required,
      (control: AbstractControl) =>
        Validators.max(this.square.ySquare)(control),
    ]),
    orientation: new FormControl('valid', [
      Validators.required,
      Validators.pattern('valid'),
    ]),
  });
  launcher() {
    if (this.squareForm.valid) {
      this.isLoading = true;
      this.currentLocation.xCurrent = Number(this.squareForm.value.xCurrent);
      this.currentLocation.yCurrent = Number(this.squareForm.value.yCurrent);
      this.square.xSquare = Number(this.squareForm.value.xSquare);
      this.square.ySquare = Number(this.squareForm.value.ySquare);
      this.launch.launchHoover();
      this.isLoading = false;
      this.isOver = true;
    }
  }

  ngOnInit(): void {
    this.isUntouched = true;
  }
}
