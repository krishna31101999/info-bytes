import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WflipflopsComponent } from './wflipflops.component';

describe('WflipflopsComponent', () => {
  let component: WflipflopsComponent;
  let fixture: ComponentFixture<WflipflopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WflipflopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WflipflopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
