import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeImageComponent } from './heroe-image.component';

describe('HeroeImageComponent', () => {
  let component: HeroeImageComponent;
  let fixture: ComponentFixture<HeroeImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroeImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
