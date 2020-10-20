import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KsocksComponent } from './ksocks.component';

describe('KsocksComponent', () => {
  let component: KsocksComponent;
  let fixture: ComponentFixture<KsocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KsocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KsocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
