import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensportsshoeComponent } from './womensportsshoe.component';

describe('WomensportsshoeComponent', () => {
  let component: WomensportsshoeComponent;
  let fixture: ComponentFixture<WomensportsshoeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomensportsshoeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomensportsshoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
