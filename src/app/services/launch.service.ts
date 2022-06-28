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
        console.log(currentLocation);
        console.log('CASE 1 : top right');
        //check initial direction and go to east
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
        console.log(currentLocation);
        console.log('1st switch complete');
        // go to (xSquare-1) column
        while (currentLocation.xCurrent < square.xSquare - 1) {
          currentLocation.direction = 'A';
          currentLocation.xCurrent++;
          // save current location
          currentLocation = {
            xCurrent: currentLocation.xCurrent,
            yCurrent: currentLocation.yCurrent,
            direction: currentLocation.direction,
            orientation: currentLocation.orientation,
          };

          console.log('Check this', currentLocation);
          this.doneAreas.push(currentLocation);
        }
        console.log(currentLocation);
        console.log('reached xsqaure-1 complete');

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
        console.log(currentLocation);
        console.log('reached highest line');
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
        console.log(currentLocation);
        console.log('get ready for the loops');
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
              console.log(currentLocation);
              console.log(` done loop number `, i + 1);
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
              console.log(currentLocation);
              console.log(` do loop number `, i + 1);
            }
          }
          if (currentLocation.yCurrent === square.ySquare) {
            currentLocation.direction = 'G';
            currentLocation.direction = 'A';
            currentLocation.xCurrent--;
            currentLocation.direction = 'G';
            currentLocation.orientation = 'S';
          } else {
            currentLocation.direction = 'D';
            currentLocation.direction = 'A';
            currentLocation.xCurrent--;
            currentLocation.direction = 'D';
            currentLocation.orientation = 'N';
          }

          // save current location
          currentLocation = {
            xCurrent: currentLocation.xCurrent,
            yCurrent: currentLocation.yCurrent,
            direction: currentLocation.direction,
            orientation: currentLocation.orientation,
          };
          this.doneAreas.push(currentLocation);
        }
        console.log('starting last col !');
        // Doing the last col
        if (currentLocation.yCurrent === square.ySquare) {
          //if the hoover starts last col from the top of area
          for (let i = 0; i < square.ySquare; i++) {
            currentLocation.direction = 'G';
            currentLocation.direction = 'A';
            currentLocation.yCurrent--;
            // save current location
            currentLocation = {
              xCurrent: currentLocation.xCurrent,
              yCurrent: currentLocation.yCurrent,
              direction: currentLocation.direction,
              orientation: currentLocation.orientation,
            };
          }
        }
        // else starting from bottom
        else {
          for (let i = 0; i < square.ySquare; i++) {
            currentLocation.direction = 'D';
            currentLocation.direction = 'A';
            currentLocation.yCurrent++;
            // save current location
            currentLocation = {
              xCurrent: currentLocation.xCurrent,
              yCurrent: currentLocation.yCurrent,
              direction: currentLocation.direction,
              orientation: currentLocation.orientation,
            };
          }
        }

        // setting final orientation
        if (currentLocation.yCurrent === square.ySquare) {
          currentLocation.orientation = 'S';
        } else {
          currentLocation.orientation = 'N';
        }
        // setting final location & doneAreas array for front end display
        this.doneAreas.push(currentLocation);
        finalLocation.xFinal = currentLocation.xCurrent;
        finalLocation.yFinal = currentLocation.yCurrent;
        finalLocation.orientation = currentLocation.orientation;
        return console.log('top right complete !');
      }

      // top left
      case currentLocation.xCurrent < square.xSquare / 2 &&
        currentLocation.yCurrent >= square.ySquare / 2: {
        console.log('CASE 2 : top left');
        //check initial direction and go to west
        switch (currentLocation.orientation) {
          case 'N':
            {
              currentLocation.direction = 'G';
            }
            break;

          case 'E':
            {
              currentLocation.direction = 'DD';
            }
            break;
          case 'S':
            {
              currentLocation.direction = 'D';
            }
            break;
          default: {
            return console.log('no direction top left');
          }
        }

        // go to column 1
        while (currentLocation.xCurrent > 0) {
          currentLocation.direction = 'A';
          currentLocation.xCurrent--;
          this.doneAreas.push(currentLocation);
        }
        currentLocation.direction = 'D';
        currentLocation.orientation = 'N';
        // go to the highest line
        while (currentLocation.yCurrent !== square.ySquare) {
          currentLocation.direction = 'A';
          currentLocation.yCurrent++;
          this.doneAreas.push(currentLocation);
        }
        // turn to get on the last column
        currentLocation.direction = 'G';
        currentLocation.orientation = 'W';
        currentLocation.direction = 'A';
        currentLocation.xCurrent--;
        this.doneAreas.push(currentLocation);
        currentLocation.direction = 'G';
        currentLocation.orientation = 'S';
        // loop over the remainings columns
        while (currentLocation.xCurrent >= square.xSquare) {
          // check if the hoover is at the top of the area
          if (currentLocation.yCurrent === square.ySquare) {
            for (let i = 0; i <= square.ySquare; i++) {
              currentLocation.direction = 'A';
              currentLocation.yCurrent--;
              this.doneAreas.push(currentLocation);
            }
          }
          // else the hoover is at the bottom of the area
          else {
            for (let i = 0; i <= square.ySquare; i++) {
              currentLocation.direction = 'A';
              currentLocation.yCurrent++;
              this.doneAreas.push(currentLocation);
            }
          }
          currentLocation.direction = 'D';
          currentLocation.direction = 'A';
          currentLocation.xCurrent++;
          this.doneAreas.push(currentLocation);
          currentLocation.direction = 'D';
          if (currentLocation.yCurrent === square.ySquare) {
            currentLocation.orientation = 'S';
          } else {
            currentLocation.orientation = 'N';
          }
          this.doneAreas.push(currentLocation);
          finalLocation.xFinal = currentLocation.xCurrent;
          finalLocation.yFinal = currentLocation.yCurrent;
          finalLocation.orientation = currentLocation.orientation;
        }
        return console.log('top left complete');
      }

      //bottom right
      case currentLocation.xCurrent >= square.xSquare / 2 &&
        currentLocation.yCurrent < square.ySquare / 2: {
        console.log('CASE 3 : bottom right');
        {
          //check initial direction and go to east
          switch (currentLocation.orientation) {
            case 'N':
              {
                currentLocation.direction = 'D';
              }
              break;

            case 'W':
              {
                currentLocation.direction = 'DD';
              }
              break;
            case 'S':
              {
                currentLocation.direction = 'G';
              }
              break;
            default: {
              return console.log('Error direction with bottom right');
            }
          }

          // go to (xSquare-1) column
          while (currentLocation.xCurrent < square.xSquare) {
            currentLocation.direction = 'A';
            currentLocation.xCurrent++;
            this.doneAreas.push(currentLocation);
          }
          currentLocation.direction = 'D';
          currentLocation.orientation = 'S';
          // go to the lowest line
          while (currentLocation.yCurrent !== square.ySquare) {
            currentLocation.direction = 'A';
            currentLocation.yCurrent--;
            this.doneAreas.push(currentLocation);
          }
          // turn to get on the last column
          currentLocation.direction = 'G';
          currentLocation.orientation = 'E';
          currentLocation.direction = 'A';
          currentLocation.xCurrent++;
          this.doneAreas.push(currentLocation);
          currentLocation.direction = 'G';
          currentLocation.orientation = 'N';
          // loop over the remainings columns
          while (currentLocation.xCurrent > 0) {
            // check if the hoover is at the top of the area
            if (currentLocation.yCurrent === square.ySquare) {
              for (let i = 0; i <= square.ySquare; i++) {
                currentLocation.direction = 'A';
                currentLocation.yCurrent--;
                this.doneAreas.push(currentLocation);
              }
            }
            // else the hoover is at the bottom of the area
            else {
              for (let i = 0; i <= square.ySquare; i++) {
                currentLocation.direction = 'A';
                currentLocation.yCurrent++;
                this.doneAreas.push(currentLocation);
              }
            }
            currentLocation.direction = 'G';
            currentLocation.direction = 'A';
            currentLocation.xCurrent--;
            this.doneAreas.push(currentLocation);
            currentLocation.direction = 'G';
            if (currentLocation.yCurrent === square.ySquare) {
              currentLocation.orientation = 'S';
            } else {
              currentLocation.orientation = 'N';
            }
          }
          this.doneAreas.push(currentLocation);
          finalLocation.xFinal = currentLocation.xCurrent;
          finalLocation.yFinal = currentLocation.yCurrent;
          finalLocation.orientation = currentLocation.orientation;
        }
        return console.log('bottom right complete !');
      }

      // bottom left
      case currentLocation.xCurrent < square.xSquare / 2 &&
        currentLocation.yCurrent < square.ySquare / 2:
        {
          console.log('CASE 4:bottom left');
          //check initial direction and go to west
          switch (currentLocation.orientation) {
            case 'N':
              {
                currentLocation.direction = 'G';
              }
              break;

            case 'E':
              {
                currentLocation.direction = 'DD';
              }
              break;
            case 'S':
              {
                currentLocation.direction = 'D';
              }
              break;
            default: {
              return console.log('error with bottom left');
            }
          }

          // go to column 1
          while (currentLocation.xCurrent > 0) {
            currentLocation.direction = 'A';
            currentLocation.xCurrent--;
            this.doneAreas.push(currentLocation);
          }
          currentLocation.direction = 'D';
          currentLocation.orientation = 'S';
          // go to the lowest line
          while (currentLocation.yCurrent !== square.ySquare) {
            currentLocation.direction = 'A';
            currentLocation.yCurrent--;
            this.doneAreas.push(currentLocation);
          }
          // turn to get on the last column
          currentLocation.direction = 'G';
          currentLocation.orientation = 'W';
          currentLocation.direction = 'A';
          currentLocation.xCurrent--;
          this.doneAreas.push(currentLocation);
          currentLocation.direction = 'G';
          currentLocation.orientation = 'S';
          // loop over the remainings columns
          while (currentLocation.xCurrent >= square.xSquare) {
            // check if the hoover is at the top of the area
            if (currentLocation.yCurrent === square.ySquare) {
              for (let i = 0; i <= square.ySquare; i++) {
                currentLocation.direction = 'A';
                currentLocation.yCurrent--;
                this.doneAreas.push(currentLocation);
              }
            }
            // else the hoover is at the bottom of the area
            else {
              for (let i = 0; i <= square.ySquare; i++) {
                currentLocation.direction = 'A';
                currentLocation.yCurrent++;
                this.doneAreas.push(currentLocation);
              }
            }
            currentLocation.direction = 'D';
            currentLocation.direction = 'A';
            currentLocation.xCurrent++;
            this.doneAreas.push(currentLocation);
            currentLocation.direction = 'D';
            if (currentLocation.yCurrent === square.ySquare) {
              currentLocation.orientation = 'S';
            } else {
              currentLocation.orientation = 'N';
            }
          }
          this.doneAreas.push(currentLocation);
          finalLocation.xFinal = currentLocation.xCurrent;
          finalLocation.yFinal = currentLocation.yCurrent;
          finalLocation.orientation = currentLocation.orientation;
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
