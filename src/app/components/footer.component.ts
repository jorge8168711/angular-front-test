import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="p-4 text-center bg-gray-400 border-t text-gray-600 border-gray-500">
      <p class="font-light">E-Commerce &copy; {{ year }}</p>
    </footer>
  `,
})
export class FooterComponent {
  year = new Date().getFullYear();
}
