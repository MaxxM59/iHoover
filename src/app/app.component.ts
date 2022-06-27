import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  };
  public finalLocation: FinalLocation = {
    xFinal: 0,
    yFinal: 0,
  };
  // loading handler variables
  isLoading: boolean = false;
  isOver: boolean = false;
  isUntouched: boolean = true;

  // User form
  squareForm = new FormGroup({
    xSquare: new FormControl('', [Validators.required, Validators.min(2)]),
    ySquare: new FormControl('', [Validators.required, Validators.min(2)]),
    xCurrent: new FormControl('', [Validators.required]),
    yCurrent: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.isUntouched = true;
  }
}
