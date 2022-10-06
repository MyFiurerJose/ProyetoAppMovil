import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './coversor.page.html',
  styleUrls: ['./coversor.page.scss'],
})
export class CoversorPage implements OnInit {

  pageTitle = 'conversor';
  isNotHome = true;

  constructor() { }

  ngOnInit() {
  }

}
