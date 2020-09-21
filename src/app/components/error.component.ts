import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
    <div class="flex min-h-screen">
      <div class="m-auto px-8">
        <h1 class="text-4xl">ERROR 404</h1>
      </div>
    </div>
  `,
})
export class ErrorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
