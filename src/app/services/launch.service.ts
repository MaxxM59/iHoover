import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LaunchService {
  constructor() {}
  // global path array storing the path locations
  doneAreas: any[][] = [];

  launchHoover(
    // logic variables
    square: { xSquare: number; ySquare: number },
    currentLocation: {
      xCurrent: number;
      yCurrent: number;
      currentDirection: string;
    },
    finalLocation: {
      xFinal: number;
      yFinal: number;
      finalcurrentOrientation: string;
    },
    currentOrientation: string
  ) {
    // Empty the global array so you don't get olders launches paths
    this.doneAreas = [];
    // Get initial data
    this.doneAreas.push([currentLocation.xCurrent, currentLocation.yCurrent]);

    // Spliting the area in 4 sub-areas
    switch (true && true) {
      // top right
      case currentLocation.xCurrent >= square.xSquare / 2 &&
        currentLocation.yCurrent >= square.ySquare / 2: {
        //check initial currentLocation.currentDirection and go to east
        if (currentLocation.xCurrent !== square.xSquare) {
          switch (currentOrientation) {
            case 'North':
              {
                currentLocation.currentDirection = 'D';
                currentOrientation = 'E';
              }
              break;

            case 'West':
              {
                currentLocation.currentDirection = 'DD';
                currentOrientation = 'E';
              }
              break;
            case 'South': {
              currentLocation.currentDirection = 'G';
              currentOrientation = 'E';
            }
            case 'East':
              {
                currentOrientation = 'E';
              }
              break;
            default:
              return console.log(
                'No currentLocation.currentDirection top right'
              );
          }
        } else {
          switch (currentOrientation) {
            case 'North':
              {
                currentLocation.currentDirection = 'G';
                currentOrientation = 'W';
              }
              break;

            case 'West':
              {
                currentOrientation = 'W';
              }
              break;
            case 'South': {
              currentLocation.currentDirection = 'D';
              currentOrientation = 'W';
            }
            case 'East':
              {
                currentLocation.currentDirection = 'DD';
                currentOrientation = 'W';
              }
              break;
            default:
              return console.log(
                'No currentLocation.currentDirection top right'
              );
          }
        }

        // go to (xSquare-1) column
        while (currentLocation.xCurrent !== square.xSquare - 1) {
          // in case the hoover is on the last column
          if (currentLocation.xCurrent === square.xSquare) {
            currentLocation.currentDirection = 'A';
            currentLocation.xCurrent--;
            // save current location
            this.doneAreas.push([
              currentLocation.xCurrent,
              currentLocation.yCurrent,
            ]);
          }
          // else going to xSqare-1 col as planned
          else {
            currentLocation.currentDirection = 'A';
            currentLocation.xCurrent++;
            // save current location
            this.doneAreas.push([
              currentLocation.xCurrent,
              currentLocation.yCurrent,
            ]);
          }
        }

        currentLocation.currentDirection = 'G';
        currentOrientation = 'N';
        // go to the highest line
        while (currentLocation.yCurrent !== square.ySquare) {
          currentLocation.currentDirection = 'A';
          currentLocation.yCurrent++;
          // save current location
          this.doneAreas.push([
            currentLocation.xCurrent,
            currentLocation.yCurrent,
          ]);
        }

        // turn to get on the last column
        currentLocation.currentDirection = 'D';
        currentOrientation = 'E';
        currentLocation.currentDirection = 'A';
        currentLocation.xCurrent++;
        currentLocation.currentDirection = 'D';
        currentOrientation = 'S';
        // save current location
        this.doneAreas.push([
          currentLocation.xCurrent,
          currentLocation.yCurrent,
        ]);
        // loop over the remainings columns till col 1
        while (currentLocation.xCurrent > 0) {
          // check if the hoover is at the top of the area
          if (currentLocation.yCurrent === square.ySquare) {
            for (let i = 0; i < square.ySquare; i++) {
              currentLocation.currentDirection = 'A';
              currentLocation.yCurrent--;
              // save current location
              this.doneAreas.push([
                currentLocation.xCurrent,
                currentLocation.yCurrent,
              ]);
            }
          }
          // else the hoover is at the bottom of the area
          else {
            for (let i = 0; i < square.ySquare; i++) {
              currentLocation.currentDirection = 'A';
              currentLocation.yCurrent++;
              // save current location
              this.doneAreas.push([
                currentLocation.xCurrent,
                currentLocation.yCurrent,
              ]);
            }
          }
          // turning left if the hoover is on top
          if (currentLocation.yCurrent === square.ySquare) {
            currentLocation.currentDirection = 'G';
            currentLocation.currentDirection = 'A';
            currentLocation.xCurrent--;
            currentLocation.currentDirection = 'G';
            currentOrientation = 'S';
          }
          // else it's at the bottom so turning right
          else {
            currentLocation.currentDirection = 'D';
            currentLocation.currentDirection = 'A';
            currentLocation.xCurrent--;
            currentLocation.currentDirection = 'D';
            currentOrientation = 'N';
            // save current location (top/bottom of last col)
            this.doneAreas.push([
              currentLocation.xCurrent,
              currentLocation.yCurrent,
            ]);
          }
          // save current location
          this.doneAreas.push([
            currentLocation.xCurrent,
            currentLocation.yCurrent,
          ]);
        }
        // Doing the last col
        if (currentLocation.yCurrent === square.ySquare) {
          //if the hoover starts last col from the top of area

          for (let i = 0; i < square.ySquare; i++) {
            currentLocation.currentDirection = 'A';
            currentLocation.yCurrent--;

            // save current location
            this.doneAreas.push([
              currentLocation.xCurrent,
              currentLocation.yCurrent,
            ]);
          }
        }
        // else starting from bottom
        else if (currentLocation.yCurrent === 0) {
          for (let i = 0; i < square.ySquare; i++) {
            currentLocation.currentDirection = 'A';
            currentLocation.yCurrent++;
            // save current location
            this.doneAreas.push([
              currentLocation.xCurrent,
              currentLocation.yCurrent,
            ]);
          }
        }
        // setting final currentOrientation
        if (currentLocation.yCurrent === square.ySquare) {
          currentOrientation = 'S';
        } else {
          currentOrientation = 'N';
        }
        // setting final location & doneAreas array for front end display

        finalLocation.xFinal = currentLocation.xCurrent;
        finalLocation.yFinal = currentLocation.yCurrent;
        finalLocation.finalcurrentOrientation = currentOrientation;
        return console.log('top right complete !');
      }

      // top left
      case currentLocation.xCurrent < square.xSquare / 2 &&
        currentLocation.yCurrent >= square.ySquare / 2:
        {
        }
        return console.log('top left complete');

      //bottom right
      case currentLocation.xCurrent >= square.xSquare / 2 &&
        currentLocation.yCurrent < square.ySquare / 2:
        {
        }
        return console.log('bottom right complete !');

      // bottom left
      case currentLocation.xCurrent < square.xSquare / 2 &&
        currentLocation.yCurrent < square.ySquare / 2:
        {
        }
        return console.log('bottom left compelte !');

      default: {
        return null;
      }
    }
  }
}
