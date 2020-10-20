import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MencasualshoesComponent } from './mencasualshoes.component';

describe('MencasualshoesComponent', () => {
  let component: MencasualshoesComponent;
  let fixture: ComponentFixture<MencasualshoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MencasualshoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MencasualshoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
