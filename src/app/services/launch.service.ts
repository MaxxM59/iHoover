import { Injectable } from '@angular/core';
import { CurrentLocation, FinalLocation, Square } from '../models/model';

@Injectable({
  providedIn: 'root',
})
export class LaunchService {
  constructor() {}

  launchHoover(
    square: Square,
    currentLocation: CurrentLocation,
    finalLocation: FinalLocation
  ) {
    // Spliting the area in 4 sub-areas
    switch (true && true) {
      // top right
      case currentLocation.xCurrent >= square.xSquare / 2 &&
        currentLocation.yCurrent >= square.ySquare / 2: {
        console.log('CASE 1 : top right');
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
          default:
            return null;
        }

        // go to (xSquare-1) column
        while (currentLocation.xCurrent < square.xSquare) {
          currentLocation.direction = 'A';
          currentLocation.xCurrent++;
        }
        currentLocation.direction = 'G';
        currentLocation.orientation = 'N';
        // go to the highest line
        while (currentLocation.yCurrent !== square.ySquare) {
          currentLocation.direction = 'A';
          currentLocation.yCurrent++;
        }
        // turn to get on the last column
        currentLocation.direction = 'D';
        currentLocation.orientation = 'E';
        currentLocation.direction = 'A';
        currentLocation.xCurrent++;
        currentLocation.direction = 'D';
        currentLocation.orientation = 'S';
        // loop over the remainings columns
        while (currentLocation.xCurrent > 0) {
          // check if the hoover is at the top of the area
          if (currentLocation.yCurrent === square.ySquare) {
            for (let i = 0; i <= square.ySquare; i++) {
              currentLocation.direction = 'A';
              currentLocation.yCurrent--;
            }
          }
          // else the hoover is at the bottom of the area
          else {
            for (let i = 0; i <= square.ySquare; i++) {
              currentLocation.direction = 'A';
              currentLocation.yCurrent++;
            }
          }
          currentLocation.direction = 'G';
          currentLocation.direction = 'A';
          currentLocation.xCurrent--;
          currentLocation.direction = 'G';
          if (currentLocation.yCurrent === square.ySquare) {
            currentLocation.orientation = 'S';
          } else {
            currentLocation.orientation = 'N';
          }
          finalLocation.xFinal = currentLocation.xCurrent;
          finalLocation.yFinal = currentLocation.yCurrent;
          finalLocation.orientation = currentLocation.orientation;
        }
        return null;
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
            return null;
          }
        }

        // go to column 1
        while (currentLocation.xCurrent > 0) {
          currentLocation.direction = 'A';
          currentLocation.xCurrent--;
        }
        currentLocation.direction = 'D';
        currentLocation.orientation = 'N';
        // go to the highest line
        while (currentLocation.yCurrent !== square.ySquare) {
          currentLocation.direction = 'A';
          currentLocation.yCurrent++;
        }
        // turn to get on the last column
        currentLocation.direction = 'G';
        currentLocation.orientation = 'W';
        currentLocation.direction = 'A';
        currentLocation.xCurrent--;
        currentLocation.direction = 'G';
        currentLocation.orientation = 'S';
        // loop over the remainings columns
        while (currentLocation.xCurrent >= square.xSquare) {
          // check if the hoover is at the top of the area
          if (currentLocation.yCurrent === square.ySquare) {
            for (let i = 0; i <= square.ySquare; i++) {
              currentLocation.direction = 'A';
              currentLocation.yCurrent--;
            }
          }
          // else the hoover is at the bottom of the area
          else {
            for (let i = 0; i <= square.ySquare; i++) {
              currentLocation.direction = 'A';
              currentLocation.yCurrent++;
            }
          }
          currentLocation.direction = 'D';
          currentLocation.direction = 'A';
          currentLocation.xCurrent++;
          currentLocation.direction = 'D';
          if (currentLocation.yCurrent === square.ySquare) {
            currentLocation.orientation = 'S';
          } else {
            currentLocation.orientation = 'N';
          }
          finalLocation.xFinal = currentLocation.xCurrent;
          finalLocation.yFinal = currentLocation.yCurrent;
          finalLocation.orientation = currentLocation.orientation;
        }
        return null;
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
              return (
                (finalLocation.xFinal = currentLocation.xCurrent),
                (finalLocation.yFinal = currentLocation.yCurrent),
                (finalLocation.orientation = currentLocation.orientation)
              );
            }
          }

          // go to (xSquare-1) column
          while (currentLocation.xCurrent < square.xSquare) {
            currentLocation.direction = 'A';
            currentLocation.xCurrent++;
          }
          currentLocation.direction = 'D';
          currentLocation.orientation = 'S';
          // go to the lowest line
          while (currentLocation.yCurrent !== square.ySquare) {
            currentLocation.direction = 'A';
            currentLocation.yCurrent--;
          }
          // turn to get on the last column
          currentLocation.direction = 'G';
          currentLocation.orientation = 'E';
          currentLocation.direction = 'A';
          currentLocation.xCurrent++;
          currentLocation.direction = 'G';
          currentLocation.orientation = 'N';
          // loop over the remainings columns
          while (currentLocation.xCurrent > 0) {
            // check if the hoover is at the top of the area
            if (currentLocation.yCurrent === square.ySquare) {
              for (let i = 0; i <= square.ySquare; i++) {
                currentLocation.direction = 'A';
                currentLocation.yCurrent--;
              }
            }
            // else the hoover is at the bottom of the area
            else {
              for (let i = 0; i <= square.ySquare; i++) {
                currentLocation.direction = 'A';
                currentLocation.yCurrent++;
              }
            }
            currentLocation.direction = 'G';
            currentLocation.direction = 'A';
            currentLocation.xCurrent--;
            currentLocation.direction = 'G';
            if (currentLocation.yCurrent === square.ySquare) {
              currentLocation.orientation = 'S';
            } else {
              currentLocation.orientation = 'N';
            }
          }
          finalLocation.xFinal = currentLocation.xCurrent;
          finalLocation.yFinal = currentLocation.yCurrent;
          finalLocation.orientation = currentLocation.orientation;
        }
        return null;
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
              return (
                (finalLocation.xFinal = currentLocation.xCurrent),
                (finalLocation.yFinal = currentLocation.yCurrent),
                (finalLocation.orientation = currentLocation.orientation)
              );
            }
          }

          // go to column 1
          while (currentLocation.xCurrent > 0) {
            currentLocation.direction = 'A';
            currentLocation.xCurrent--;
          }
          currentLocation.direction = 'D';
          currentLocation.orientation = 'S';
          // go to the lowest line
          while (currentLocation.yCurrent !== square.ySquare) {
            currentLocation.direction = 'A';
            currentLocation.yCurrent--;
          }
          // turn to get on the last column
          currentLocation.direction = 'G';
          currentLocation.orientation = 'W';
          currentLocation.direction = 'A';
          currentLocation.xCurrent--;
          currentLocation.direction = 'G';
          currentLocation.orientation = 'S';
          // loop over the remainings columns
          while (currentLocation.xCurrent >= square.xSquare) {
            // check if the hoover is at the top of the area
            if (currentLocation.yCurrent === square.ySquare) {
              for (let i = 0; i <= square.ySquare; i++) {
                currentLocation.direction = 'A';
                currentLocation.yCurrent--;
              }
            }
            // else the hoover is at the bottom of the area
            else {
              for (let i = 0; i <= square.ySquare; i++) {
                currentLocation.direction = 'A';
                currentLocation.yCurrent++;
              }
            }
            currentLocation.direction = 'D';
            currentLocation.direction = 'A';
            currentLocation.xCurrent++;
            currentLocation.direction = 'D';
            if (currentLocation.yCurrent === square.ySquare) {
              currentLocation.orientation = 'S';
            } else {
              currentLocation.orientation = 'N';
            }
          }

          finalLocation.xFinal = currentLocation.xCurrent;
          finalLocation.yFinal = currentLocation.yCurrent;
          finalLocation.orientation = currentLocation.orientation;
        }
        return (
          (finalLocation.xFinal = currentLocation.xCurrent),
          (finalLocation.yFinal = currentLocation.yCurrent),
          (finalLocation.orientation = currentLocation.orientation)
        );

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
