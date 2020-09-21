import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <div class="flex flex-col min-h-screen bg-gray-300">
      <app-header></app-header>

      <main class="flex-1 w-full max-w-screen-lg pt-24 px-4 pb-4 mx-auto">
        <router-outlet></router-outlet>
      </main>

      <app-footer></app-footer>
    </div>
  `,
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
