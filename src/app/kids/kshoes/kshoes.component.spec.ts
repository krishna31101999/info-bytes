import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KshoesComponent } from './kshoes.component';

describe('KshoesComponent', () => {
  let component: KshoesComponent;
  let fixture: ComponentFixture<KshoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KshoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KshoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
