import { TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { LaunchService } from './launch.service';

describe('LaunchService', () => {
    // logic variables
    let square = { xSquare: 0, ySquare: 0 };
    let currentLocation = {
        xCurrent: 0,
        yCurrent: 0,
        currentDirection: '',
    };
    let currentOrientation: string = '';
    let orientationValues: string[] = ['N', 'W', 'S', 'E'];
    let finalLocation = {
        xFinal: 0,
        yFinal: 0,
        finalcurrentOrientation: '',
    };
    beforeEach(() => {
        TestBed.configureTestingModule({});
        const service = new LaunchService();
        for (square.xSquare = 0; square.xSquare <= 25; square.xSquare++) {
            for (square.ySquare = 0; square.ySquare <= 25; square.ySquare++) {
                for (
                    currentLocation.xCurrent = 0;
                    currentLocation.xCurrent < square.xSquare;
                    currentLocation.xCurrent++
                ) {
                    for (
                        currentLocation.yCurrent = 0;
                        currentLocation.yCurrent < square.ySquare;
                        currentLocation.yCurrent++
                    ) {
                        orientationValues.forEach((currentOrientation) => {
                            service.launchHoover(
                                square,
                                currentLocation,
                                finalLocation,
                                currentOrientation
                            );
                        });
                    }
                }
            }
        }
        expect(service.launchHoover.length);
    });
});
describe('LaunchService', () => {
    let service: LaunchService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(LaunchService);
    });
    it(`should have defined coords on finish'`, () => {
        const service: LaunchService = TestBed.get(LaunchService);
        expect(service).toBeTruthy();
    });
    it(`should have defined coords on finish'`, () => {
        const service: LaunchService = TestBed.get(LaunchService);
        expect(service).toBeTruthy();
    });
    it(`should return coords on finish'`, () => {
        const service: LaunchService = TestBed.get(LaunchService);
        expect(service).toBeGreaterThanOrEqual(0, 0);
    });
});
