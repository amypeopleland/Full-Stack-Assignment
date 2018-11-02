import { Component, OnInit } from '@angular/core';
import {forEach} from '@angular/router/src/utils/collection';
@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})

export class TestComponentComponent implements OnInit {

  TomatoSelected = false;
  EggSelected = false;
  BroccoliSelected = false;
  BeefSelected = false;
  PorkSelected = false;
  PineappleSelected = false;
  selected = 0;
  result: string;
  choice: boolean[] = [this.TomatoSelected, this.EggSelected, this.BroccoliSelected, this.BeefSelected, this.PorkSelected, this.PineappleSelected];
  cook() {
    this.selected = 0;
    this.choice = [this.TomatoSelected, this.EggSelected, this.BroccoliSelected, this.BeefSelected, this.PorkSelected, this.PineappleSelected];
    for (const i in this.choice) {
      if (this.choice[i] === true) {
        this.selected = this.selected + 1;
      }
    }
    if ( (this.selected === 2) && (this.EggSelected && this.TomatoSelected)) {
      this.result = 'scrambled eggs with tomatoes';
      //console.log(this.result);
    } else if ( (this.selected === 2 ) && (this.BroccoliSelected && this.BeefSelected)) {
      this.result = 'Beef and Broccoli';
      //console.log(this.result);
    } else if ( (this.selected === 2) && (this.PorkSelected && this.PineappleSelected)) {
      this.result = 'Sweet and sour pork';
      //console.log(this.result);
    } else {
      this.result = 'Invalid recipe';
      //console.log(this.result);
    }
    //onsole.log(this.selected);

  }
  clear() {
    this.result = '';
    this.selected = 0;
    this.choice = [this.TomatoSelected, this.EggSelected, this.BroccoliSelected, this.BeefSelected, this.PorkSelected, this.PineappleSelected];
    for (const i in this.choice) {
      if (this.choice[i] === true) {
        this.selected = this.selected + 1;
      }
    }
    //console.log(this.selected);
  }

  constructor() { }

  ngOnInit() {
  }
}

