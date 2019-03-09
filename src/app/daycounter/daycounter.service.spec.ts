/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DaycounterService } from './daycounter.service';

describe('Service: DayCounter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaycounterService]
    });
  });

  it('should ...', inject([DaycounterService], (service: DaycounterService) => {
    expect(service).toBeTruthy();
  }));
});
