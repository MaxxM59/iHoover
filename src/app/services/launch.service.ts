import { Injectable } from '@angular/core';
import { CurrentLocation, FinalLocation, Square } from '../models/model';

@Injectable({
  providedIn: 'root',
})
export class LaunchService {
  constructor() {}
  doneAreas: Array<CurrentLocation> = [];

  launchHoover(
    square: Square,
    currentLocation: CurrentLocation,
    finalLocation: FinalLocation
  ) {
    square = square;
    currentLocation = currentLocation;

    this.doneAreas.push(currentLocation);
    // Spliting the area in 4 sub-areas
    switch (true && true) {
      // top right
      case currentLocation.xCurrent >= square.xSquare / 2 &&
        currentLocation.yCurrent >= square.ySquare / 2: {
        //check initial direction and go to east
        if (currentLocation.xCurrent !== square.xSquare) {
          switch (currentLocation.orientation) {
            case 'North':
              {
                currentLocation.direction = 'D';
                currentLocation.orientation = 'E';
              }
              break;

            case 'West':
              {
                currentLocation.direction = 'DD';
                currentLocation.orientation = 'E';
              }
              break;
            case 'South': {
              currentLocation.direction = 'G';
              currentLocation.orientation = 'E';
            }
            case 'East':
              {
                currentLocation.orientation = 'E';
              }
              break;
            default:
              return console.log('No direction top right');
          }
        } else {
          switch (currentLocation.orientation) {
            case 'North':
              {
                currentLocation.direction = 'G';
                currentLocation.orientation = 'W';
              }
              break;

            case 'West':
              {
                currentLocation.orientation = 'W';
              }
              break;
            case 'South': {
              currentLocation.direction = 'D';
              currentLocation.orientation = 'W';
            }
            case 'East':
              {
                currentLocation.direction = 'DD';
                currentLocation.orientation = 'W';
              }
              break;
            default:
              return console.log('No direction top right');
          }
        }

        // go to (xSquare-1) column
        while (currentLocation.xCurrent !== square.xSquare - 1) {
          // in case the hoover is on the last column
          if (currentLocation.xCurrent === square.xSquare) {
            currentLocation.direction = 'A';
            currentLocation.xCurrent--;
            // save current location
            currentLocation = {
              xCurrent: currentLocation.xCurrent,
              yCurrent: currentLocation.yCurrent,
              direction: currentLocation.direction,
              orientation: currentLocation.orientation,
            };
          }
          // else going to xSqare-1 col as planned
          else {
            currentLocation.direction = 'A';
            currentLocation.xCurrent++;
            // save current location
            currentLocation = {
              xCurrent: currentLocation.xCurrent,
              yCurrent: currentLocation.yCurrent,
              direction: currentLocation.direction,
              orientation: currentLocation.orientation,
            };
          }

          this.doneAreas.push(currentLocation);
        }

        currentLocation.direction = 'G';
        currentLocation.orientation = 'N';
        // go to the highest line
        while (currentLocation.yCurrent !== square.ySquare) {
          currentLocation.direction = 'A';
          currentLocation.yCurrent++;
          // save current location
          currentLocation = {
            xCurrent: currentLocation.xCurrent,
            yCurrent: currentLocation.yCurrent,
            direction: currentLocation.direction,
            orientation: currentLocation.orientation,
          };
          this.doneAreas.push(currentLocation);
        }

        // turn to get on the last column
        currentLocation.direction = 'D';
        currentLocation.orientation = 'E';
        currentLocation.direction = 'A';
        currentLocation.xCurrent++;
        // save current location
        currentLocation = {
          xCurrent: currentLocation.xCurrent,
          yCurrent: currentLocation.yCurrent,
          direction: currentLocation.direction,
          orientation: currentLocation.orientation,
        };
        this.doneAreas.push(currentLocation);
        currentLocation.direction = 'D';
        currentLocation.orientation = 'S';

        // loop over the remainings columns till col 1
        while (currentLocation.xCurrent > 0) {
          // check if the hoover is at the top of the area
          if (currentLocation.yCurrent === square.ySquare) {
            for (let i = 0; i < square.ySquare; i++) {
              currentLocation.direction = 'A';
              currentLocation.yCurrent--;
              // save current location
              currentLocation = {
                xCurrent: currentLocation.xCurrent,
                yCurrent: currentLocation.yCurrent,
                direction: currentLocation.direction,
                orientation: currentLocation.orientation,
              };
              this.doneAreas.push(currentLocation);
            }
          }
          // else the hoover is at the bottom of the area
          else {
            for (let i = 0; i < square.ySquare; i++) {
              currentLocation.direction = 'A';
              currentLocation.yCurrent++;
              // save current location
              currentLocation = {
                xCurrent: currentLocation.xCurrent,
                yCurrent: currentLocation.yCurrent,
                direction: currentLocation.direction,
                orientation: currentLocation.orientation,
              };
              this.doneAreas.push(currentLocation);
            }
          }
          // turning left if the hoover is on top
          if (currentLocation.yCurrent === square.ySquare) {
            currentLocation.direction = 'G';
            currentLocation.direction = 'A';
            currentLocation.xCurrent--;
            currentLocation.direction = 'G';
            currentLocation.orientation = 'S';
            // save current location
            currentLocation = {
              xCurrent: currentLocation.xCurrent,
              yCurrent: currentLocation.yCurrent,
              direction: currentLocation.direction,
              orientation: currentLocation.orientation,
            };
          }
          // else it's at the bottom so turning right
          else {
            currentLocation.direction = 'D';
            currentLocation.direction = 'A';
            currentLocation.xCurrent--;
            currentLocation.direction = 'D';
            currentLocation.orientation = 'N';
            // save current location (top/bottom of last col)
            currentLocation = {
              xCurrent: currentLocation.xCurrent,
              yCurrent: currentLocation.yCurrent,
              direction: currentLocation.direction,
              orientation: currentLocation.orientation,
            };
          }

          this.doneAreas.push(currentLocation);
        }
        // Doing the last col
        if (currentLocation.yCurrent === square.ySquare) {
          //if the hoover starts last col from the top of area

          for (let i = 0; i < square.ySquare; i++) {
            currentLocation.direction = 'A';
            currentLocation.yCurrent--;

            this.doneAreas.push(currentLocation);

            // save current location
            currentLocation = {
              xCurrent: currentLocation.xCurrent,
              yCurrent: currentLocation.yCurrent,
              direction: currentLocation.direction,
              orientation: currentLocation.orientation,
            };
            console.log(
              'loop n°',
              i,
              'location :',
              currentLocation.xCurrent,
              currentLocation.yCurrent
            );
          }
        }
        // else starting from bottom
        else if (currentLocation.yCurrent === 0) {
          for (let i = 0; i < square.ySquare; i++) {
            currentLocation.direction = 'A';
            currentLocation.yCurrent++;
            this.doneAreas.push(currentLocation);
            // save current location
            currentLocation = {
              xCurrent: currentLocation.xCurrent,
              yCurrent: currentLocation.yCurrent,
              direction: currentLocation.direction,
              orientation: currentLocation.orientation,
            };
            console.log(
              'loop n°',
              i,
              'location :',
              currentLocation.xCurrent,
              currentLocation.yCurrent
            );
          }
        } else {
          break;
        }
        // setting final orientation
        if (currentLocation.yCurrent === square.ySquare) {
          currentLocation.orientation = 'S';
        } else {
          currentLocation.orientation = 'N';
        }
        // setting final location & doneAreas array for front end display

        finalLocation.xFinal = currentLocation.xCurrent;
        finalLocation.yFinal = currentLocation.yCurrent;
        finalLocation.orientation = currentLocation.orientation;
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
        return (
          (finalLocation.xFinal = currentLocation.xCurrent),
          (finalLocation.yFinal = currentLocation.yCurrent),
          (finalLocation.orientation = currentLocation.orientation)
        );
      }
    }
  }
}
