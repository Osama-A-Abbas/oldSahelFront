import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-green-button',
  templateUrl: './green-button.component.html',
  styleUrls: ['./green-button.component.scss']
})
export class GreenButtonComponent implements OnInit {

  link = "some link";
  value = "Some Text";
  constructor() { }

  ngOnInit(): void {
  }

}