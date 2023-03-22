import { Component, Input } from '@angular/core';
import { PokemonDetailModel } from 'src/app/datastore/entities/pokemon-detail.model';

@Component({
  selector: 'app-pokemon-row',
  templateUrl: './pokemon-row.component.html',
  styleUrls: ['./pokemon-row.component.css']
})
export class PokemonRowComponent {
  @Input() pokemon!: PokemonDetailModel;
}
