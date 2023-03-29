import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonHomeComponent } from './pokemon-header-row.component';

describe('PokemonHomeComponent', () => {
  let component: PokemonHomeComponent;
  let fixture: ComponentFixture<PokemonHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
