import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="w-full bg-white shadow p-4">
      <nav class="mx-auto w-full max-w-screen-lg flex items-center">
        <div class="flex items-center">
          <h1 class="m-0 font-bold text-blue-700 pl-4 text-xl">E-Commerce</h1>
        </div>

        <div class="h-8 border-gray-400 border-r mx-4"></div>

        <ul class="flex items-center text-sm text-gray-500">
          <li class="flex items-center mr-8 font-bold">
            <a
              class="flex items-center"
              [routerLink]="['/products']"
              routerLinkActive="text-blue-500"
            >
              <svg class="mr-2" width="25" height="15">
                <use href="assets/img/icons.svg#fa-store" />
              </svg>
              Products
            </a>
          </li>

          <li class="flex items-center mr-8">
            <a
              class="flex items-center"
              [routerLink]="['cart']"
              routerLinkActive="text-blue-500"
            >
              <svg class="mr-2" width="25" height="15">
                <use href="assets/img/icons.svg#fa-shopping-cart" />
              </svg>
              Cart
            </a>
          </li>
        </ul>
      </nav>
    </header>
  `,
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
