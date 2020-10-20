import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenformalshoesComponent } from './menformalshoes.component';

describe('MenformalshoesComponent', () => {
  let component: MenformalshoesComponent;
  let fixture: ComponentFixture<MenformalshoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenformalshoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenformalshoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
