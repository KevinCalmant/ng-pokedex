import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex-detailt',
  templateUrl: './pokedex-detailt.component.html',
  styleUrls: ['./pokedex-detailt.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokedexDetailtComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
