import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WshoesComponent } from './wshoes.component';

describe('WshoesComponent', () => {
  let component: WshoesComponent;
  let fixture: ComponentFixture<WshoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WshoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WshoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
