import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonThrowComponent } from './pokemon-row.component';

describe('PokemonThrowComponent', () => {
  let component: PokemonThrowComponent;
  let fixture: ComponentFixture<PokemonThrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonThrowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonThrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
