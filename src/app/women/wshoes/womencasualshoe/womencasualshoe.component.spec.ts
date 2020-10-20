import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomencasualshoeComponent } from './womencasualshoe.component';

describe('WomencasualshoeComponent', () => {
  let component: WomencasualshoeComponent;
  let fixture: ComponentFixture<WomencasualshoeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomencasualshoeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomencasualshoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
