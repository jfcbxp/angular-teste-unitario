import { Component, OnInit } from '@angular/core';
import { Investiments } from '../model/investiments';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public investiments: Array<Investiments> = [{ name: 'itau', value: 100 }];
  constructor() {}

  ngOnInit(): void {}
}
