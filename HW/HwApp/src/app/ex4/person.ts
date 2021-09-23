export default class Person {
  constructor(public name: string,
              public bio: string,
              public imagePath: string,
              public quotes: Array<string>,
              public links: Array<string>) { }
}
