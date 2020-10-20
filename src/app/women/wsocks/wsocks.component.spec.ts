import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WsocksComponent } from './wsocks.component';

describe('WsocksComponent', () => {
  let component: WsocksComponent;
  let fixture: ComponentFixture<WsocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WsocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WsocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
