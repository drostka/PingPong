import { TestBed } from '@angular/core/testing';

import { SkillLevelService } from './skill-level.service';

describe('SkillLevelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SkillLevelService = TestBed.get(SkillLevelService);
    expect(service).toBeTruthy();
  });
});
