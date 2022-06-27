import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentLocation, FinalLocation, Square } from '../models/model';

@Injectable({
  providedIn: 'root',
})
export class LaunchService {
  constructor(private router: Router) {}

  // logic variables
  public square: Square = {
    xSquare: 0,
    ySquare: 0,
  };
  public currentLocation: CurrentLocation = {
    xCurrent: 0,
    yCurrent: 0,
  };
  public finalLocation: FinalLocation = {
    xFinal: 0,
    yFinal: 0,
  };
  // loading handler variables
  isLoading: boolean = false;
}

function launch()
{
  throw new Error('Function not implemented.');
}

