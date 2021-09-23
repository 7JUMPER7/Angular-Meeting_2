import { Component, OnInit } from '@angular/core';
import Person from './person';

@Component({
  selector: 'app-ex4',
  templateUrl: './ex4.component.html',
  styleUrls: ['./ex4.component.css']
})
export class Ex4Component implements OnInit {
  person!: Person;
  constructor() {
    this.person = new Person(
      'Билл Гейтс',
      'Основатель Microsoft',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Visit_of_Bill_Gates%2C_Chairman_of_Breakthrough_Energy_Ventures%2C_to_the_European_Commission_5_%28cropped%29.jpg/800px-Visit_of_Bill_Gates%2C_Chairman_of_Breakthrough_Energy_Ventures%2C_to_the_European_Commission_5_%28cropped%29.jpg',
      Array<string> ('If you think your teacher is tough, wait till you get a boss',
        'Life is not fair — get used to it!',
        'Success is a lousy teacher. It seduces smart people into thinking they can’t lose',
        'Be nice to nerds. Chances are you’ll end up working for one'
      ),
      Array<string> ('https://en.wikipedia.org/wiki/Bill_Gates',
        'https://www.gatesfoundation.org/',
        'https://www.gatesnotes.com/',
        'https://twitter.com/billgates')
    );
  }

  ngOnInit() {
  }

  getLinkDomain(link: string): string {
    let a: HTMLAnchorElement = document.createElement('a');
    a.href = link;
    return a.hostname;
  }

}
