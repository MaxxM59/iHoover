import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    square = { xSquare: 0, ySquare: 0 };
    currentLocation = {
        xCurrent: 0,
        yCurrent: 0,
        currentDirection: '',
    };
    currentOrientation: string = '';
    finalLocation = {
        xFinal: 0,
        yFinal: 0,
        finalcurrentOrientation: '',
    };
    // clone the object
    finalLocationLauch = structuredClone(this.finalLocation);

    // loading handler variables
    isLoading: boolean = false;
    isOver: boolean = false;
    isUntouched: boolean = true;

    // User form
    squareForm = new FormGroup({
        xSquare: new FormControl(10, [Validators.required, Validators.min(2)]),
        ySquare: new FormControl(10, [Validators.required, Validators.min(2)]),
        xCurrent: new FormControl(3, [Validators.required]),
        yCurrent: new FormControl(3, [Validators.required]),
        currentOrientation: new FormControl('North', [Validators.required]),
    });

    launcher() {
        // Handling result display
        this.isUntouched = false;
        this.isLoading = true;
        // get values from the form
        this.square = {
            xSquare: Number(this.squareForm.value.xSquare),
            ySquare: Number(this.squareForm.value.ySquare),
        };
        this.currentLocation = {
            xCurrent: Number(this.squareForm.value.xCurrent),
            yCurrent: Number(this.squareForm.value.yCurrent),
            currentDirection: '',
        };
        this.currentOrientation = String(this.squareForm.value.currentOrientation);
        // call launchHoover function from launch service
        this.launch.launchHoover(
            this.square,
            this.currentLocation,
            this.finalLocation,
            this.currentOrientation
        );
        // handling result display
        this.isLoading = false;
        this.isOver = true;
    }

    ngOnInit(): void {
        this.isUntouched = true;
    }
}
