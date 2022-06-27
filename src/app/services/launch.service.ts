import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentLocation, FinalLocation, Square } from '../models/model';

@Injectable({
  providedIn: 'root',
})
export class LaunchService {
  constructor(private router: Router) {}

  // loading handler variables
  isLoading: boolean = false;
}

function launchHoover() {
  let square: Square = {
    xSquare: 0,
    ySquare: 0,
  };
  let currentLocation: CurrentLocation = {
    xCurrent: 0,
    yCurrent: 0,
    direction: '',
  };
  let finalLocation: FinalLocation = {
    xFinal: 0,
    yFinal: 0,
  };

  // Spliting the area in 4 sub-areas
  switch (true && true) {
    // top right
    case currentLocation.xCurrent >= square.xSquare / 2 &&
      currentLocation.yCurrent >= square.ySquare / 2:
      {
        currentLocation.direction = 'D';
        // go to (xSquare-1) column
        while (currentLocation.xCurrent < square.xSquare) {
          currentLocation.direction = 'A';
          currentLocation.xCurrent++;
        }
        currentLocation.direction = 'G';
        // go to the highest line
        while (currentLocation.yCurrent !== square.ySquare) {
          currentLocation.direction = 'A';
          currentLocation.yCurrent++;
        }
        // turn to get on the last column
        currentLocation.direction = 'D';
        currentLocation.direction = 'A';
        currentLocation.xCurrent++;
        currentLocation.direction = 'D';
        // loop over the remainings columns
        while (currentLocation.xCurrent > 0) {
          // check if the hoover is at the top of the area
          if (currentLocation.yCurrent === square.ySquare) {
            for (let i = 0; i < square.ySquare; i++) {
              currentLocation.direction = 'A';
              currentLocation.yCurrent--;
            }
          }
          // else the hoover is at the bottom of the area
          else {
            for (let i = 0; i < square.ySquare; i++) {
              currentLocation.direction = 'A';
              currentLocation.yCurrent++;
            }
          }
          currentLocation.direction = 'G';
          currentLocation.direction = 'A';
          currentLocation.xCurrent--;
          currentLocation.direction = 'G';
        }
        finalLocation.xFinal = currentLocation.xCurrent;
        finalLocation.yFinal = currentLocation.yCurrent;
        
      }
      break;
    // top left
    case currentLocation.xCurrent >= square.xSquare / 2 &&
      currentLocation.yCurrent < square.ySquare / 2:
      {
      }
      break;
    //bottom right
    case currentLocation.xCurrent < square.xSquare / 2 &&
      currentLocation.yCurrent >= square.ySquare / 2:
      {
      }
      break;
    // bottom left
    case currentLocation.xCurrent < square.xSquare / 2 &&
      currentLocation.yCurrent < square.ySquare / 2:
      {
      }
      break;
    default: {
      return null;
    }
  }
}
