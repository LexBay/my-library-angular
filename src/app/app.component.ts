import { Component } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-library';

  toRead = [
    new Book("Notes from a Young Black Chef", "Kwame Onwauchi", 2019),
    new Book("Salt, Fat, Acid, Heat", "Samin Nosrat", 2019)
  ];
}
