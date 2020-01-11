import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FightComponentComponent } from './fight-component.component';

describe('FightComponentComponent', () => {
  let component: FightComponentComponent;
  let fixture: ComponentFixture<FightComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FightComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
