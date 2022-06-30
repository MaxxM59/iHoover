import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LaunchService } from './services/launch.service';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LaunchService],
            declarations: [AppComponent],
        }).compileComponents();
    });

    it(`should have coords on finish'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.currentLocation).toBeDefined();
    });
});
describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LaunchService],
            declarations: [AppComponent],
        }).compileComponents();
    });

    it(`should return possitive number`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.currentLocation).toBePositiveInfinity();
    });
});
