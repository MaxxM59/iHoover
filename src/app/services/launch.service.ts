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
                if (currentLocation.xCurrent < square.xSquare - 1) {
                    // if xCurrrent<(xSquare-1)
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
                            return console.log('No currentLocation.currentDirection top right');
                    }
                }
                // if xCurrent>(xSquare-1)
                else if (currentLocation.xCurrent > square.xSquare - 1) {
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
                            return console.log('No currentLocation.currentDirection top right');
                    }
                }
                // else the hoover is on the (xSquare-1) col
                else {
                    switch (currentOrientation) {
                        case 'North':
                            {
                                currentOrientation = 'N';
                            }
                            break;

                        case 'West':
                            {
                                currentLocation.currentDirection = 'D';
                                currentOrientation = 'N';
                            }
                            break;
                        case 'South': {
                            currentLocation.currentDirection = 'DD';
                            currentOrientation = 'N';
                        }
                        case 'East':
                            {
                                currentLocation.currentDirection = 'G';
                                currentOrientation = 'N';
                            }
                            break;
                        default:
                            return null;
                    }
                }

                // go to (xSquare-1) column
                while (currentLocation.xCurrent !== square.xSquare - 1) {
                    // in case the hoover is on the last column
                    if (currentLocation.xCurrent === square.xSquare) {
                        currentLocation.currentDirection = 'A';
                        currentLocation.xCurrent--;
                        // save current location
                        this.doneAreas.push([currentLocation.xCurrent, currentLocation.yCurrent]);
                    }
                    // else going to xSqare-1 col as planned
                    else {
                        currentLocation.currentDirection = 'A';
                        currentLocation.xCurrent++;
                        // save current location
                        this.doneAreas.push([currentLocation.xCurrent, currentLocation.yCurrent]);
                    }
                }

                currentLocation.currentDirection = 'G';
                currentOrientation = 'N';
                // go to the highest line
                while (currentLocation.yCurrent !== square.ySquare) {
                    currentLocation.currentDirection = 'A';
                    currentLocation.yCurrent++;
                    // save current location
                    this.doneAreas.push([currentLocation.xCurrent, currentLocation.yCurrent]);
                }

                // turn to get on the last column
                currentLocation.currentDirection = 'D';
                currentOrientation = 'E';
                currentLocation.currentDirection = 'A';
                currentLocation.xCurrent++;
                currentLocation.currentDirection = 'D';
                currentOrientation = 'S';
                // save current location
                this.doneAreas.push([currentLocation.xCurrent, currentLocation.yCurrent]);
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
                    }
                    // save current location
                    this.doneAreas.push([currentLocation.xCurrent, currentLocation.yCurrent]);
                }
                // Doing the last col
                if (currentLocation.yCurrent === square.ySquare) {
                    //if the hoover starts last col from the top of area

                    for (let i = 0; i < square.ySquare; i++) {
                        currentLocation.currentDirection = 'A';
                        currentLocation.yCurrent--;

                        // save current location
                        this.doneAreas.push([currentLocation.xCurrent, currentLocation.yCurrent]);
                    }
                }
                // else starting from bottom
                else if (currentLocation.yCurrent === 0) {
                    for (let i = 0; i < square.ySquare; i++) {
                        currentLocation.currentDirection = 'A';
                        currentLocation.yCurrent++;
                        // save current location
                        this.doneAreas.push([currentLocation.xCurrent, currentLocation.yCurrent]);
                    }
                }
                // setting final currentOrientation
                if (currentLocation.yCurrent === square.ySquare) {
                    currentOrientation = 'N';
                } else {
                    currentOrientation = 'S';
                }
                // setting final location for front end display

                finalLocation.xFinal = currentLocation.xCurrent;
                finalLocation.yFinal = currentLocation.yCurrent;
                finalLocation.finalcurrentOrientation = currentOrientation;
                return finalLocation;
            }

            // top left
            case currentLocation.xCurrent < square.xSquare / 2 &&
                currentLocation.yCurrent >= square.ySquare / 2:
                {
                    //check initial currentLocation.currentDirection and go to east
                    if (currentLocation.xCurrent < square.xSquare - 1) {
                        // if xCurrrent>1)
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
                                return console.log('No currentLocation.currentDirection top right');
                        }
                    }
                    // if xCurrent<1
                    else if (currentLocation.xCurrent > square.xSquare - 1) {
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
                                    currentLocation.currentDirection = 'DD';
                                    currentOrientation = 'W';
                                }
                                break;
                            default:
                                return console.log('No currentLocation.currentDirection top right');
                        }
                    }
                    // else the hoover is on the (xSquare-1) col so going north
                    else {
                        switch (currentOrientation) {
                            case 'North':
                                {
                                    currentOrientation = 'N';
                                }
                                break;

                            case 'West':
                                {
                                    currentLocation.currentDirection = 'D';
                                    currentOrientation = 'N';
                                }
                                break;
                            case 'South': {
                                currentLocation.currentDirection = 'DD';
                                currentOrientation = 'N';
                            }
                            case 'East':
                                {
                                    currentLocation.currentDirection = 'G';
                                    currentOrientation = 'N';
                                }
                                break;
                            default:
                                return null;
                        }
                    }

                    // go to  column 1
                    while (currentLocation.xCurrent !== 1) {
                        // in case the hoover is on the first column
                        if (currentLocation.xCurrent === 0) {
                            currentLocation.currentDirection = 'A';
                            currentLocation.xCurrent++;
                            // save current location
                            this.doneAreas.push([
                                currentLocation.xCurrent,
                                currentLocation.yCurrent,
                            ]);
                        }
                        // else going to col 1 as planned
                        else {
                            currentLocation.currentDirection = 'A';
                            currentLocation.xCurrent--;
                            // save current location
                            this.doneAreas.push([
                                currentLocation.xCurrent,
                                currentLocation.yCurrent,
                            ]);
                        }
                    }

                    currentLocation.currentDirection = 'D';
                    currentOrientation = 'N';
                    // go to the highest line
                    while (currentLocation.yCurrent !== square.ySquare) {
                        currentLocation.currentDirection = 'A';
                        currentLocation.yCurrent++;
                        // save current location
                        this.doneAreas.push([currentLocation.xCurrent, currentLocation.yCurrent]);
                    }

                    // turn to get on the last column
                    currentLocation.currentDirection = 'G';
                    currentOrientation = 'W';
                    currentLocation.currentDirection = 'A';
                    currentLocation.xCurrent--;
                    currentLocation.currentDirection = 'G';
                    currentOrientation = 'S';
                    // save current location
                    this.doneAreas.push([currentLocation.xCurrent, currentLocation.yCurrent]);
                    // loop over the remainings columns till col 1
                    while (currentLocation.xCurrent < square.xSquare) {
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
                        // turning right if the hoover is on top
                        if (currentLocation.yCurrent === square.ySquare) {
                            currentLocation.currentDirection = 'D';
                            currentLocation.currentDirection = 'A';
                            currentLocation.xCurrent++;
                            currentLocation.currentDirection = 'D';
                            currentOrientation = 'S';
                        }
                        // else it's at the bottom so turning left
                        else {
                            currentLocation.currentDirection = 'G';
                            currentLocation.currentDirection = 'A';
                            currentLocation.xCurrent++;
                            currentLocation.currentDirection = 'G';
                            currentOrientation = 'N';
                        }
                        // save current location
                        this.doneAreas.push([currentLocation.xCurrent, currentLocation.yCurrent]);
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
                        currentOrientation = 'N';
                    } else {
                        currentOrientation = 'S';
                    }
                    // setting final location for front end display

                    finalLocation.xFinal = currentLocation.xCurrent;
                    finalLocation.yFinal = currentLocation.yCurrent;
                    finalLocation.finalcurrentOrientation = currentOrientation;
                }
                return finalLocation;

            //bottom right
            case currentLocation.xCurrent >= square.xSquare / 2 &&
                currentLocation.yCurrent < square.ySquare / 2: {
                //check initial currentLocation.currentDirection and go to east
                if (currentLocation.xCurrent < square.xSquare - 1) {
                    // if xCurrrent<(xSquare-1)
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
                            return console.log('No currentLocation.currentDirection top right');
                    }
                }
                // if xCurrent>(xSquare-1)
                else if (currentLocation.xCurrent > square.xSquare - 1) {
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
                            return console.log('No currentLocation.currentDirection top right');
                    }
                }
                // else the hoover is on the (xSquare-1) col
                else {
                    switch (currentOrientation) {
                        case 'North':
                            {
                                currentOrientation = 'N';
                            }
                            break;

                        case 'West':
                            {
                                currentLocation.currentDirection = 'D';
                                currentOrientation = 'N';
                            }
                            break;
                        case 'South': {
                            currentLocation.currentDirection = 'DD';
                            currentOrientation = 'N';
                        }
                        case 'East':
                            {
                                currentLocation.currentDirection = 'G';
                                currentOrientation = 'N';
                            }
                            break;
                        default:
                            return finalLocation;
                    }
                }

                // go to (xSquare-1) column
                while (currentLocation.xCurrent !== square.xSquare - 1) {
                    // in case the hoover is on the last column
                    if (currentLocation.xCurrent === square.xSquare) {
                        currentLocation.currentDirection = 'A';
                        currentLocation.xCurrent--;
                        // save current location
                        this.doneAreas.push([currentLocation.xCurrent, currentLocation.yCurrent]);
                    }
                    // else going to xSqare-1 col as planned
                    else {
                        currentLocation.currentDirection = 'A';
                        currentLocation.xCurrent++;
                        // save current location
                        this.doneAreas.push([currentLocation.xCurrent, currentLocation.yCurrent]);
                    }
                }

                currentLocation.currentDirection = 'G';
                currentOrientation = 'N';
                // go to the lowest line
                while (currentLocation.yCurrent !== 0) {
                    currentLocation.currentDirection = 'A';
                    currentLocation.yCurrent++;
                    // save current location
                    this.doneAreas.push([currentLocation.xCurrent, currentLocation.yCurrent]);
                }

                // turn to get on the last column
                currentLocation.currentDirection = 'G';
                currentOrientation = 'E';
                currentLocation.currentDirection = 'A';
                currentLocation.xCurrent++;
                currentLocation.currentDirection = 'G';
                currentOrientation = 'S';
                // save current location
                this.doneAreas.push([currentLocation.xCurrent, currentLocation.yCurrent]);
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
                    }
                    // save current location
                    this.doneAreas.push([currentLocation.xCurrent, currentLocation.yCurrent]);
                }
                // Doing the last col
                if (currentLocation.yCurrent === square.ySquare) {
                    //if the hoover starts last col from the top of area

                    for (let i = 0; i < square.ySquare; i++) {
                        currentLocation.currentDirection = 'A';
                        currentLocation.yCurrent--;

                        // save current location
                        this.doneAreas.push([currentLocation.xCurrent, currentLocation.yCurrent]);
                    }
                }
                // else starting from bottom
                else if (currentLocation.yCurrent === 0) {
                    for (let i = 0; i < square.ySquare; i++) {
                        currentLocation.currentDirection = 'A';
                        currentLocation.yCurrent++;
                        // save current location
                        this.doneAreas.push([currentLocation.xCurrent, currentLocation.yCurrent]);
                    }
                }
                // setting final currentOrientation
                if (currentLocation.yCurrent === square.ySquare) {
                    currentOrientation = 'N';
                } else {
                    currentOrientation = 'S';
                }
                // setting final location for front end display

                finalLocation.xFinal = currentLocation.xCurrent;
                finalLocation.yFinal = currentLocation.yCurrent;
                finalLocation.finalcurrentOrientation = currentOrientation;
                return finalLocation;
            }

            // bottom left
            case currentLocation.xCurrent < square.xSquare / 2 &&
                currentLocation.yCurrent < square.ySquare / 2:
                {
                    //check initial currentLocation.currentDirection and go to east
                    if (currentLocation.xCurrent < square.xSquare - 1) {
                        // if xCurrrent>1)
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
                                return console.log('No currentLocation.currentDirection top right');
                        }
                    }
                    // if xCurrent<1
                    else if (currentLocation.xCurrent > square.xSquare - 1) {
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
                                    currentLocation.currentDirection = 'DD';
                                    currentOrientation = 'W';
                                }
                                break;
                            default:
                                return console.log('No currentLocation.currentDirection top right');
                        }
                    }
                    // else the hoover is on the (xSquare-1) col so going north
                    else {
                        switch (currentOrientation) {
                            case 'North':
                                {
                                    currentOrientation = 'N';
                                }
                                break;

                            case 'West':
                                {
                                    currentLocation.currentDirection = 'D';
                                    currentOrientation = 'N';
                                }
                                break;
                            case 'South': {
                                currentLocation.currentDirection = 'DD';
                                currentOrientation = 'N';
                            }
                            case 'East':
                                {
                                    currentLocation.currentDirection = 'G';
                                    currentOrientation = 'N';
                                }
                                break;
                            default:
                                return null;
                        }
                    }

                    // go to  column 1
                    while (currentLocation.xCurrent !== 1) {
                        // in case the hoover is on the first column
                        if (currentLocation.xCurrent === 0) {
                            currentLocation.currentDirection = 'A';
                            currentLocation.xCurrent++;
                            // save current location
                            this.doneAreas.push([
                                currentLocation.xCurrent,
                                currentLocation.yCurrent,
                            ]);
                        }
                        // else going to col 1 as planned
                        else {
                            currentLocation.currentDirection = 'A';
                            currentLocation.xCurrent--;
                            // save current location
                            this.doneAreas.push([
                                currentLocation.xCurrent,
                                currentLocation.yCurrent,
                            ]);
                        }
                    }

                    currentLocation.currentDirection = 'D';
                    currentOrientation = 'N';
                    // go to the lowest line
                    while (currentLocation.yCurrent !== 0) {
                        currentLocation.currentDirection = 'A';
                        currentLocation.yCurrent--;
                        // save current location
                        this.doneAreas.push([currentLocation.xCurrent, currentLocation.yCurrent]);
                    }

                    // turn to get on the last column
                    currentLocation.currentDirection = 'D';
                    currentOrientation = 'W';
                    currentLocation.currentDirection = 'A';
                    currentLocation.xCurrent--;
                    currentLocation.currentDirection = 'D';
                    currentOrientation = 'S';
                    // save current location
                    this.doneAreas.push([currentLocation.xCurrent, currentLocation.yCurrent]);
                    // loop over the remainings columns till col 1
                    while (currentLocation.xCurrent < square.xSquare) {
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
                        // turning right if the hoover is on top
                        if (currentLocation.yCurrent === square.ySquare) {
                            currentLocation.currentDirection = 'D';
                            currentLocation.currentDirection = 'A';
                            currentLocation.xCurrent++;
                            currentLocation.currentDirection = 'D';
                            currentOrientation = 'S';
                        }
                        // else it's at the bottom so turning left
                        else {
                            currentLocation.currentDirection = 'G';
                            currentLocation.currentDirection = 'A';
                            currentLocation.xCurrent++;
                            currentLocation.currentDirection = 'G';
                            currentOrientation = 'N';
                        }
                        // save current location
                        this.doneAreas.push([currentLocation.xCurrent, currentLocation.yCurrent]);
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
                        currentOrientation = 'N';
                    } else {
                        currentOrientation = 'S';
                    }
                    // setting final location for front end display

                    finalLocation.xFinal = currentLocation.xCurrent;
                    finalLocation.yFinal = currentLocation.yCurrent;
                    finalLocation.finalcurrentOrientation = currentOrientation;
                }
                return finalLocation;

            default: {
                return finalLocation;
            }
        }
    }
}
