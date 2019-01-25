import Reacr from 'react';

export default class Emojir {
  private tings: Map<string, string> = new Map<string, string>();
  constructor() {
    this.tings.set('a','😀');
    this.tings.set('b','🐝');
    this.tings.set('c','🌊');
    this.tings.set('d','🍆');
    this.tings.set('e','🐘');
    this.tings.set('f','🤬');
    this.tings.set('g','🤮');
    this.tings.set('h','💖');
    this.tings.set('i','🤩');
    this.tings.set('j','😂');
    this.tings.set('k','🤣');
    this.tings.set('l','🤷‍');
    this.tings.set('m','💪');
    this.tings.set('n','⛔️');
    this.tings.set('o','👌');
    this.tings.set('p','😲');
    this.tings.set('q','💦');
    this.tings.set('r','🤘');
    this.tings.set('s','🐍');
    this.tings.set('t','🚍');
    this.tings.set('u','🦄');
    this.tings.set('v','🍕');
    this.tings.set('w','🤠');
    this.tings.set('x','🤢');
    this.tings.set('y','🧐');
    this.tings.set('z','😴');
  }
  execute(text: string): string {
    return this.tings.get(text) || '☠️';
  }
}
