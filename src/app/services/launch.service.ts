import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location, FinalLocation, Square } from '../models/model';

@Injectable({
  providedIn: 'root',
})
export class LaunchService {
  constructor(private router: Router) {}

  launch() {}
}
