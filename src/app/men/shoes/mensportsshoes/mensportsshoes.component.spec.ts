import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensportsshoesComponent } from './mensportsshoes.component';

describe('MensportsshoesComponent', () => {
  let component: MensportsshoesComponent;
  let fixture: ComponentFixture<MensportsshoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensportsshoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensportsshoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
