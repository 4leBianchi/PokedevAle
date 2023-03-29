import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonHeaderRowComponent } from './pokemon-header-row.component';

describe('PokemonHeaderRowComponent', () => {
  let component: PokemonHeaderRowComponent;
  let fixture: ComponentFixture<PokemonHeaderRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonHeaderRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonHeaderRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
