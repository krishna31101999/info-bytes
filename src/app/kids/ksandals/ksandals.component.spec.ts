import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KsandalsComponent } from './ksandals.component';

describe('KsandalsComponent', () => {
  let component: KsandalsComponent;
  let fixture: ComponentFixture<KsandalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KsandalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KsandalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
