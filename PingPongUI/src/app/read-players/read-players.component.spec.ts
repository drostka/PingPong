import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadPlayersComponent } from './read-players.component';

describe('ReadPlayersComponent', () => {
  let component: ReadPlayersComponent;
  let fixture: ComponentFixture<ReadPlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadPlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
