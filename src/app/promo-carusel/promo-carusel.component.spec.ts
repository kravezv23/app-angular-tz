import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoCaruselComponent } from './promo-carusel.component';

describe('PromoCaruselComponent', () => {
  let component: PromoCaruselComponent;
  let fixture: ComponentFixture<PromoCaruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoCaruselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoCaruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
