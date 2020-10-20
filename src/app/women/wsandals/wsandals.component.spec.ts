import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WsandalsComponent } from './wsandals.component';

describe('WsandalsComponent', () => {
  let component: WsandalsComponent;
  let fixture: ComponentFixture<WsandalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WsandalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WsandalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
