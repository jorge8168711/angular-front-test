import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <p>Footer</p>
    </footer>
  `,
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
