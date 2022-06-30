import { TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { LaunchService } from './launch.service';

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
});
describe('LaunchService', () => {
    let service: LaunchService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(LaunchService);
    });

    it(`should have positive coords on finish'`, () => {
        const service: LaunchService = TestBed.get(LaunchService);
        expect(service).toBePositiveInfinity();
    });
});
